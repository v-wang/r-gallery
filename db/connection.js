const mongoose = require('mongoose');

let dbName = 'reddit-gallery';

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : `mongodb://127.0.0.1/${dbName}`;

mongoose
  .connect(mongoURI)
  .then((instance) => {
    console.log(`Connected to db: ${instance.connections[0].name}`);
  })
  .catch((err) => console.log(`Connection failed`, err));

module.exports = mongoose;
