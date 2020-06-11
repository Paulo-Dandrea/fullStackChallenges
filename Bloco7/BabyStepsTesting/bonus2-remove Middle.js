const assert = require('assert');
// escreva a função removeMiddle para passar nos testes abaixo:

let words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];

const removeMiddle = (array) => {
    if([array.length] % 2 !== 0) {
        let wordBeforeMiddle = Math.floor([array.length]/ 2);       
        words = words.slice(0, wordBeforeMiddle).concat(words.slice(wordBeforeMiddle + 1, words.length))     
        return [array[wordBeforeMiddle]];           
    }
}

const output = removeMiddle(words);

const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];



assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
console.log(words);
