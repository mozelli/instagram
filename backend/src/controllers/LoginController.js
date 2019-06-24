const User = require('../models/User');

module.exports = {

  async login(req, res) {
    const users = await User.findOne(req.body);
    return res.json(users);
  },
};
