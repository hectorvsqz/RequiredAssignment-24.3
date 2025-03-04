// index.test.js
const request = require('supertest');
const app = require('./index'); // Assuming your main file is index.js

describe('GET /', () => {
  it('Browser displays Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World RA24.3');
  });
});
