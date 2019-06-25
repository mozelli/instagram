const Post = require('../models/Post');
const path = require('path');
const fs = require('fs');

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt');
    return res.json(posts);
  },

  async store(req, res) {

    const
      {
        author, place, description, hashtags,
      } = req.body;
    const { filename: image } = req.file;
    // const name = image.split('.');
    // const filename = `${name}.jpg`;
    const post = await Post.create({
      author, place, description, hashtags, image,
    });

    req.io.emit('post', post);

    return res.status(201).json(post);
  },

  async delete(req, res) {

    const posts = await Post.findOne({ _id: req.params.id });

    const post = await Post.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        return res.status(500).send({ error: 'Fail to delete the post.' });
      } else {

        try {
          const filepath = path.resolve(__dirname, '..', '..', 'uploads/'+posts.image);
          fs.unlinkSync(filepath);
        } catch (err) {
           return res.status(500).send({ msg: 'Error when tried to delete the post image.', error: err });
        } finally {
          req.io.emit('delete', posts);

          return res.status(200).json({});
        }
      }
    });
  }
};
