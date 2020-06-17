const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123


const numbers2 = [50, 85, -30, 3, 15];
// o bigger, 0, será compador com o number, se for menor, o bigger pegará o valor de number
// reduce vai comparando o valor de um index com o próximo
const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbers.reduce(getBigger, 100);
console.log('------------')
console.log(bigger); // 85




