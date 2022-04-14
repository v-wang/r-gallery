const express = require('express');
const ImgRouter = express.Router();
const RedditImg = require('../db/models/reddit-img');

ImgRouter.get('/', (req, res) => {
  res.send('pass');
});

module.exports = ImgRouter;
