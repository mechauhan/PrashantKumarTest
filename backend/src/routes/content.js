const express = require('express'),
  Route = express.Router();

const controller = require('../controllers/content');
const multer = require('../utils/multer');

Route.post('/adduser', multer.upload.single('image'), controller.createContent);

module.exports = Route;
