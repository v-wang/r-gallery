// imgController.js

const express = require('express');
const ImgRouter = express.Router();
const RedditImg = require('../db/models/reddit-img');

//Index Route
ImgRouter.get('/', (req, res) => {
  RedditImg.find({}, (err, data) => {
    res.send(data);
  });
});

// Post Route
ImgRouter.post('/new', (req, res) => {
  RedditImg.create(req.body).then(() => res.redirect('/img'));
});

// Update
ImgRouter.put('/:id', (req, res) => {
  RedditImg.updateOne({ _id: req.params.id }, req.body).then(() =>
    res.redirect('/img')
  );
});

// Delete Route
ImgRouter.delete('/:id', (req, res) => {
  RedditImg.findByIdAndDelete(req.params.id).then(() => res.redirect('/img'));
});

module.exports = ImgRouter;
