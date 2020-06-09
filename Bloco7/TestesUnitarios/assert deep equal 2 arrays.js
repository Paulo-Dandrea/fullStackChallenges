const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5];

const assert = require('assert');

assert.deepEqual(array1, array2)

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.notDeepEqual(person1, person2, 'This two objects are equal')