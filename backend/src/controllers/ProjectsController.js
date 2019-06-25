const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = {

  async generateToken(params = {}) {
     return await jwt.sign(params, config.jwtAuth, {
      expiresIn: 86400, // seconds
    });
  },

  async index(req, res) {
    try {
      const { email } = req.body
      if (await User.findOne({ email })) {
        return res.status(400).json({ error: 'User already exists.' });
      }

      const user = await User.create(req.body);

      user.password = undefined;
      
      const token = jwt.sign({ id: user._id }, config.jwtAuth, {
        expiresIn: 86400, // seconds
      });

      return res.send({ 
        user, 
        token, 
      });

    } catch (err) {
      return res.status(400).send({ error: 'Registration failed' });
    }
  },

  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(400).send({ error: 'User not found' });
    }

    if(!await bcrypt.compare(password, user.password)){
      return res.status(400).send({ error: 'Fail to authenticate. Wrong information.' });
    }

    user.password = undefined;

    const token = jwt.sign({ id: user._id }, config.jwtAuth, {
        expiresIn: 86400, // seconds
      });

    return res.send({ 
      user, 
      token, 
    });
  }
};
