const phrase = 'Alô, Alô';
const phrase2 = 'Alô, Alô'

const assert = require('assert');

assert(phrase === phrase2);

assert(phrase === 'Alô, Alô')

const num = 1;
const stringNum = '1';

// assert(num === stringNum);
assert.equal(num, stringNum);
assert.deepEqual(num, stringNum);


