const express = require('express');
const multer = require('multer');
const uploadsConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const authMiddleware = require('./middlewares/auth');

const routes = new express.Router();
const upload = multer(uploadsConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/like', LikeController.store);
routes.delete('/posts/:id', PostController.delete);

//routes.get('/login', LoginController.login);
routes.post('/users', UserController.store);
routes.post('/register', AuthController.index);
routes.post('/authenticate', AuthController.authenticate);

module.exports = routes;
