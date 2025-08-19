const request = require('supertest');
const app = require('../app')

describe('GET /', () => {
  it('responds with 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
  });
});
