const request = require('supertest');
const app = require('express')();

app.get('/', function(req, res) {
    res.status(200);
});

request(app)
  .get('/')
  .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
  });