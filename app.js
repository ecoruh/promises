'use strict';

var exports = module.exports = {};

exports.promisePush = function (id, arr) {
  return new Promise((resolve) => {
    setTimeout( function(id) {
      arr.push(id);
      resolve();
    }, 100, id);
  });
}

exports.promisePop = function (arr) {
  return new Promise((resolve) => {
    setTimeout( function() {
      arr.pop();
      resolve();
    }, 100);
  });
}

