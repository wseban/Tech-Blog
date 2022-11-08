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
            res
              .status(400)
              .json({ message: 'Incorrect email or password. Please try again!' });
            return;
          }
        console.log(userData.dataValues);
        res.json(userData);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
