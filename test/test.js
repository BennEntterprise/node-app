var request = require('supertest');
var app = require('../index.js');

describe('GET /', function () {
    it('responds with "hello world, this should not fail"', function (done) {
        //Navigate to root and check response is "hello world"
        request(app).get('/').expect('hello Danita', done);
    });
});