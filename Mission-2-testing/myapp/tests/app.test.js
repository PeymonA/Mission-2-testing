const request = require('supertest');
const app = require('../app')

describe('GET /', () => {
  it('responds with 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
  });
});

describe('GET /carValue', () => {
  test("Returns correct output", async() =>{
    const response = await request(app).get('/carValue?model=Civic&year=2014')
    expect(response.body.message).toMatch("6614")
  })

  test("Doesn't accept negative year", async() =>{
    const response = await request(api).get('/getValue?model=Civic&year=-1')
    expect(response.status).toBe(400)
  })

  test("Doesn't accept non integer years", async() =>{
    const response = await request(api).get('/getValue?model=Civic&year=202.5')
    expect(response.status).toBe(400)
  })

  test("Numbers only for model", async() =>{
    const response = await request(api).get('/getValue?model=911&year=2020')
    expect(response.body.message).toMatch("2020")
  })

  test("Checking that symbols are ignored", async() =>{
    const response = await request(api).get('/getValue?model=Civic!&year=2014')
    expect(response.body.message).toMatch("6614")
  })

})
