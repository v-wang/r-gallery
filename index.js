const express = require('express');
const app = express();
const PORT = 3000;
const imgController = require('./controllers/imgController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', imgController);

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
