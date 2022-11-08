const router = require('express').Router();
const { Post, User, Comment } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      content: req.body.content
      // include: userId
    });
    console.log(postData.dataValues);
    res.json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{ model: Comment }],
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  router.get('/:id', async (req, res) => {
    try {
      const postData = await Post.findOne({
        Where: {
            id: req.params.id
        },
        include: [{ model: Comment }],
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;

  