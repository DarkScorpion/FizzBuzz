'use strict';

function fizzBuzz(start, finish) {
  var arr = [];
  var finish = finish || start;
  for(var i=start; i<=finish; i++) {
    arr.push( chechNumber(i) );
  }
  return arr;
}

function chechNumber(num) {
  var f = 'fizz',
      b = 'buzz';

  if (num === 0) return 0;
  if (num%15 === 0) return f+b;
  if (num%3 === 0) return f;
  if (num%5 === 0) return b;

  return num;
}

module.exports = fizzBuzz;
