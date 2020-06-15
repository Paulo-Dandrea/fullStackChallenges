const greaterThanTen = require('./7-TDD-Great than ten');

const assert = require('assert');

let parameter = [4, 10, 32, 9, 21];
let result = [32, 21];

assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);

  parameter = [4, 3, 3, 4, 4];
  result = [];
  assert.deepStrictEqual(greaterThanTen(parameter), result);

  parameter = [-4, -3, 0, -10, -11, 11];
  result = [11];
  assert.deepStrictEqual(greaterThanTen(parameter), result);

  parameter = 5;
  result = [];
  assert.deepStrictEqual(greaterThanTen(parameter), result);

parameter = ['onomatopeia', 'shield'];
// assert.throws(() => greaterThanTen(parameter), `We accept only numbers`)
