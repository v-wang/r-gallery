const express = require('express');
const ImgRouter = express.Router();
const RedditImg = require('../db/models/reddit-img');

ImgRouter.get('/', (req, res) => {
  RedditImg.find({}, (err, data) => {
    res.send(data);
  });
});

module.exports = ImgRouter;
