const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');

const contentRoutes = require('./routes/content');

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(cors());

app.use(contentRoutes);

const startListen = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017');
  } catch (error) {
    console.error(error);
  }

  app.listen(4000, () => {
    console.log(`Order running on port: 4000`);
  });
};

startListen();
