const greaterThanTen = (array) => {
  let results = [];
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') throw new Error('We accept only numbers');
    if (array[i] > 10) {
      results.push(array[i]);
    }
  }
  return results;
};


module.exports = greaterThanTen;
