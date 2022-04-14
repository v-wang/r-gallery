const express = require('express');
const ImgRouter = express.Router();

ImgRouter.get('/', (req, res) => {
  res.send('pass');
});

module.exports = ImgRouter;
