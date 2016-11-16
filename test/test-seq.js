'use strict'

var assert = require('assert');
var app = require('../app.js');

describe('test-seq', () => {

  var arr = [];

  before((done) => {
    app.promisePush(1, arr)
    .then(() => {
      return app.promisePush(3, arr);
    })
    .then(() => {
      return app.promisePush(5, arr);
    })
    .then(() => {
      done();
    });
  });

  it('test seq', (done) => {
    assert(arr.length === 3, "length " + arr.length);
    done();
  });

  after((done) => {
    app.promisePop(arr)
    .then(() => {
      return app.promisePop(arr);
    })
    .then(() => {
      return app.promisePop(arr);
    })
    .then(() => {
      assert(arr.length === 0, "array should be emptied");
      done();
    });
  });

});