// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.

let arrayTeste = [2, 4, 6, 7, -10, 0, -3];


function smallerValueOfAnArray(array) {
  let smallerValue = array[0];
  let indexSmallerValue = 0;

  for (let index in array) {
    if (array[index] < smallerValue) {
      smallerValue = array[index];
      indexSmallerValue = index;
    }
  }
  console.log("valor: " + smallerValue + " index: " + indexSmallerValue)
}

smallerValueOfAnArray(arrayTeste);
