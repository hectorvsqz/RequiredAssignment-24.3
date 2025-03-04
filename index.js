// index.js
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);
});

const closeServer = () => {
  if (server) {
    server.close();
  }
};

if (require.main === module) {
  startServer(); // Only start the server if this file is run directly
}

module.exports = app;
module.exports.startServer = startServer;
module.exports.closeServer = closeServer;
