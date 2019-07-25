const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const $PORT = process.env.PORT || 5000;
const app = express();

// app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static('public'));

app.get('/', (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  } catch (error) {
    next(error);
  }
});

app.listen($PORT, () => {
  console.log('app is connected to', $PORT);
});
