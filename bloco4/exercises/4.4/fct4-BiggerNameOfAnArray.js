// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// Valor esperado no retorno da função: Fernanda.

let arrayTeste = ['José', 'Lucasaaaaaaaaaaaaaa', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function biggerName(array) {

  let biggerName = array[0];
  let indexBiggerName = 0;

  for (let index in array) {
    if (array[index].length > biggerName.length) {
      biggerName = array[index]
      indexBiggerName = index;
    }
  }
  console.log("valor: " + biggerName + " index: " + indexBiggerName)
}

biggerName(arrayTeste);
