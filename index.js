// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

let server; // Declare server outside listen()

const startServer = () => {
  server = app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
  return server;
};

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
