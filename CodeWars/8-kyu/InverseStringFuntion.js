function solution(str) {
  let reversedStr = '';
  for (let index = str.length - 1; index >= 0; index -= 1) {
    reversedStr += str[index];
  }
  return reversedStr;
}

console.log(solution('world'));
console.log(solution('Paulo'));

function betterSolution(str){
    return str.split('').reverse().join('');  
  }

const arrowedBetterSolution = str => str.split(' ').reverse().join(' ');

console.log(arrowedBetterSolution('world'));
console.log(arrowedBetterSolution('Paulo'));

