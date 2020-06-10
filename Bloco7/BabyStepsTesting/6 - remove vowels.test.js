const removeVowels = require('./6-TDD-removeVowels')
const assert = require('assert');

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof(removeVowels), 'function') 
assert.strictEqual(removeVowels(parameter), result);
  
