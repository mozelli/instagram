const Post = require('../models/Post');

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

    return res.json(post);
  },

  async delete(req, res) {
    //res.json(req.params);
    const post = await Post.deleteOne({ _id: req.params.id });

    req.io.emit('delete', post);

    return res.json(post.n);
  }
};
