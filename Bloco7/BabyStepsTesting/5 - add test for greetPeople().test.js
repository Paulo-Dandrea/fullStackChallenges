const greetPeople = require('./5 - add test for greetPeople()');
const assert = require('assert');

assert.equal(typeof(greetPeople), 'function');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof(greetPeople),'function')

assert.deepEqual(greetPeople(parameter),(result))