const router = require('express').Router();
const { User, Post } = require('../../models');


router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ Model: Post }]
        })
        console.log(userData);
        userData.get({plain: true});
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
