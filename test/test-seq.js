'use strict'

var assert = require('assert');
var app = require('../app.js');

describe('test-seq', () => {

  var arr = [];

  before((done) => {
    app.promisePushNow(1, arr)
    .then(() => {
      app.promisePushNow(3, arr);
    })
    .then(() => {
      app.promisePushNow(5, arr);
    })
    .then(() => {
      done();
    });
  });

  it('test seq', (done) => {
    assert(arr.indexOf(1) === 0, '1st should be 1');
    assert(arr.indexOf(3) === 1, '1st should be 1');
    assert(arr.indexOf(5) === 2, '1st should be 1');
    assert(arr.length === 3, "length " + arr.length);
    done();
  });

  after((done) => {
    app.promisePopNow(arr)
    .then(() => {
      app.promisePopNow(arr);
    })
    .then(() => {
      app.promisePopNow(arr);
    })
    .then(() => {
      assert(arr.length === 0, "array should be emptied");
      done();
    });
  });

});