const assert = require('assert');

const division = (num1,num2) => num1 / num2;

const expected = division(8, 2);

assert.equal(expected, 4, 'We were waiting, weidly enough, to 5');

