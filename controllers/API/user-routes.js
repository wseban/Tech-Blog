const router = require('express').Router();
const { User, Post } = require('../../models');


router.get('/login', async (req, res) => {
    
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            },
            // include: [{ Model: Post }]
        })
        console.log(userData.dataValues);
        res.json(userData);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
