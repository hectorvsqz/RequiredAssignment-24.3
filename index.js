// index.js
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);
});

module.exports = app;