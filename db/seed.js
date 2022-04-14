const RedditImg = require('./models/reddit-img');
const seedData = require('./seedData.json');

RedditImg.deleteMany()
  .then(() => {
    return RedditImg.insertMany(seedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
