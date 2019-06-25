const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.find().sort('-name');
    return res.json(users);
  },

  async store(req, res) {
    
    const
      {
        name, email, password, birthday,
      } = req.body;

    const user = await User.create({
      name, email, password, birthday,
    });

    req.io.emit('user', user);

    return res.status(201).json(user);
  },
};
