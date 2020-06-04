const numbers = [1,2,3];


const doubleNumbersArray = numbers.map((num) => {
  return num * 2;
})

console.log(doubleNumbersArray);

function halfArray(num){
  return num / 2;
}

const halfArrayResult = numbers.map(halfArray)

console.log(halfArrayResult);
