'use strict'

var assert = require('assert');
var app = require('../app.js');

describe('test-all', () => {

  var ids = [1,3,5,7,9];
  var pushers = [];
  var poppers = [];
  var arr = [];

  before((done) => {
    ids.forEach( function (id) {
      pushers.push(app.promisePush(id, arr));
    });
    Promise.all(pushers).then(() => {
      done();
    });
  });

  it('test arr', (done) => {
    assert.deepEqual(ids, arr)
    assert(arr.length === 5, "length " + arr.length);
    done();
  });

  after((done) => {
    ids.forEach( function () {
      poppers.push(app.promisePop(arr));
    });
    Promise.all(poppers).then(() => {
      assert(arr.length === 0, "array should be emptied");
      done();
    });
  });

});