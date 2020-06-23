// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0



function vowels(str) {
    
    let numOfVowels = str.toLowerCase().split('');
    
    let array = numOfVowels.filter(letra => (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'));
   
    
return array.length;

}

// vowels('AEIOU')


module.exports = { reverseInt, vowels };
