// reddit-img.js

const mongoose = require('../connection');

const RedditImgSchema = new mongoose.Schema(
  {
    title: String,
    url: String,
  },
  { timestamps: true }
);

const RedditImg = mongoose.model('RedditImg', RedditImgSchema);

module.exports = RedditImg;
