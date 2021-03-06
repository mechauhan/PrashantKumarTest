const express = require('express'),
  Route = express.Router();

const controller = require('../controllers/content');
const multer = require('../utils/multer');

Route.post('/adduser', multer.upload.single('image'), controller.createContent);
Route.get('/getusers', controller.getAll);
Route.delete('/removeUser/:id', controller.deleteUser);

module.exports = Route;
