'use strict';

var exports = module.exports = {};

exports.promisePush = function (id, arr) {
  return new Promise((resolve) => {
    arr.push(id);
    setTimeout(resolve, 100, "foo" + id.toString());
  });
}

exports.promisePop = function (arr) {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, "foo" + arr.pop().toString());
  });
}

exports.promisePushNow = function (id, arr) {
  return new Promise((resolve) => {
    arr.push(id);
    resolve();
  });
}

exports.promisePopNow = function (arr) {
  return new Promise((resolve) => {
    arr.pop();
    resolve();
  });
}
