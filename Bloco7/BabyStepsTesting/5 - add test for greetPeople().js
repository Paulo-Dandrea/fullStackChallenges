const greetPeople = (people) => {
  const greeting = 'Hello ';
  let greetArray = [];

  for (let person in people) {
    greetArray.push(greeting + people[person])  ;
  }
  return greetArray;
};

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// const assert = require('assert');

// assert.strictEqual(typeof(greetPeople),'function')

// assert.deepEqual(greetPeople(parameter),(result))

module.exports = greetPeople;
