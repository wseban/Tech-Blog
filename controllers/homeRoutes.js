const router = require('express').Router();
const { User } = require('../models');


router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attribute: { exclude: ['password']}
        });
        const users = userData.map(() => users.get({plain: true}))
        console.log(users);
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
