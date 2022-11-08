const router = require('express').Router();
const { Comment, Post } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const commentData = await Comment.findAll({
        include: [{ model: Post }],
      });
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  router.get('/:id', async (req, res) => {
    try {
      const commentData = await Comment.findOne({
        Where: {
            id: req.params.id
        },
        include: [{ model: Post }],
      });
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  module.exports = router;
