'use strict';
var assert = require('assert');
var fizzBuzz = require('../fizzBuzz.js');

var _f = 'fizz';
var _b = 'buzz';
var _fb = _f+_b;

describe('Fizz Buzz', () => {
  it('Test 0', () => {
    var arr = [0];
    assert.deepEqual( fizzBuzz(0), arr);
  });

   it('Test 43', () => {
    var arr = [43];
    assert.deepEqual( fizzBuzz(43), arr);
  });

  it('Test 75', () => {
    var arr = [_fb];
    assert.deepEqual( fizzBuzz(75), arr);
  });

  it('Test 100', () => {
    var arr = [_b];
    assert.deepEqual( fizzBuzz(100), arr);
  });

  it('From 1 to 5', () => {
    var arr = [1, 2, _f, 4, _b];
    assert.deepEqual( fizzBuzz(1, 5), arr);
  });

  it('From 14 to 21', () => {
    var arr = [14, _fb, 16, 17, _f, 19, _b, _f];
    assert.deepEqual( fizzBuzz(14, 21), arr);
  });

  it('From 55 to 60', () => {
    var arr = [_b, 56, _f, 58, 59, _fb];
    assert.deepEqual( fizzBuzz(55, 60), arr);
  });

  it('From 95 to 99', () => {
    var arr = [_b, _f, 97, 98, _f];
    assert.deepEqual( fizzBuzz(95, 99), arr);
  });

  it('From 1 to 100', () => {
    var benchmarkArray = [
      1, 2, _f, 4, _b, _f, 7, 8, _f, _b, 11, _f, 13, 14, _fb,
      16, 17, _f, 19, _b, _f, 22, 23, _f, _b, 26, _f, 28, 29, _fb,
      31, 32, _f, 34, _b, _f, 37, 38, _f, _b, 41, _f, 43, 44, _fb,
      46, 47, _f, 49, _b, _f, 52, 53, _f, _b, 56, _f, 58, 59, _fb,
      61, 62, _f, 64, _b, _f, 67, 68, _f, _b, 71, _f, 73, 74, _fb,
      76, 77, _f, 79, _b, _f, 82, 83, _f, _b, 86, _f, 88, 89, _fb,
      91, 92, _f, 94, _b, _f, 97, 98, _f, _b
    ];
    assert.deepEqual( fizzBuzz(1, 100), benchmarkArray);
  });

});
