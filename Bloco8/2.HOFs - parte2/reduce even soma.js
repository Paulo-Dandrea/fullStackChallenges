const numbers3 = [18, 19, 23, 53, 4, 5, 76, 23, 54]; 
const getEvenSum = (result, number) => {
    console.log(result); 
    if(number % 2 === 0) {
       return result + number
    } else {
      return result
    }
};
const addEveryEvenNumberOfAnArray = numbers3.reduce(getEvenSum);
//
console.log('------------')
console.log(addEveryEvenNumberOfAnArray); 

console.log('------------')
console.log(numbers3.reduce((total,number) => (number % 2 === 0) ? total + number : total))