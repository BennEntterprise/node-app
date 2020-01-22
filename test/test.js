var request = require('supertest');
var app = require('../index.js');

describe('GET /', function () {
    it('responds with hello world', function (done) {
        //Navigate to root and check response is "hello world"
        request(app).get('/').expect('hello world', done);
    });
});