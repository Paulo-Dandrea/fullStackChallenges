// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayTeste = [27, 58, 6, 7, 10, 15];

// Valor esperado no retorno da função: 4.

function biggerValueOfAnArray(array) {
  let biggerValue = 0;
  let indexBiggerValue = 0;

  for (let index in array) {
    if (array[index] > biggerValue) {
      biggerValue = array[index];
      indexBiggerValue = index;
    }
  }
  console.log("valor: " + biggerValue + " index: " + indexBiggerValue)
}

biggerValueOfAnArray(arrayTeste);
