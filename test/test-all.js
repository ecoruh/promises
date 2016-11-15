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
    Promise.all(pushers).then(values => {
      console.log(values);
      done();
    });
  });

  it('test arr', (done) => {
    assert(arr.indexOf(1) === 0, '1st should be 1');
    assert(arr.indexOf(3) === 1, '1st should be 1');
    assert(arr.indexOf(5) === 2, '1st should be 1');
    assert(arr.indexOf(7) === 3, '1st should be 1');
    assert(arr.indexOf(9) === 4, '1st should be 1');
    assert(arr.length === 5, "length " + arr.length);
    done();
  });

  after((done) => {
    ids.forEach( function () {
      poppers.push(app.promisePop(arr));
    });
    Promise.all(poppers).then(values => {
      console.log(values);
      assert(arr.length === 0, "array should be emptied");
      done();
    });
  });

});