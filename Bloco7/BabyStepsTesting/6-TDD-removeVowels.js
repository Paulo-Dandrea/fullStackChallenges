const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
    let fillInNumber = 1;
  
    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        results.push(fillInNumber)
        fillInNumber += 1;        
      } else {
        results.push(characters[i]);
      }
    }
    return results.join('');
  };
//   const parameter = 'Dayane';
// const result = 'D1y2n3';  
  module.exports = removeVowels;