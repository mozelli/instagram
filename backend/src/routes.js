const express = require('express');
const multer = require('multer');
const uploadsConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');

const routes = new express.Router();
const upload = multer(uploadsConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/like', LikeController.store);
routes.delete('/posts/:id', PostController.delete);

//routes.get('/login', LoginController.login);
routes.post('/users', UserController.store);


module.exports = routes;
