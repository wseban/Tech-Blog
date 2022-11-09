const router = require('express').Router();
const { User, Post } = require('../../models');


router.get('/login', async (req, res) => {
    console.log(req.body)
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            },

            // include: [{ Model: Post }]
        })
        if (!userData) {
            res.json({ message: 'Please create an account!' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            console.log(req.session.cookie);
            res.json({ user: userData, message: 'You are now logged in!' });
            res.redirect('/');
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post('/:id', async (req, res) => {
    try {
      const postData = await Post.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
        // include: userId
      });
      console.log(postData.dataValues);
      res.json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
