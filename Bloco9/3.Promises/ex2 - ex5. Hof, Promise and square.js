// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

// console.log(arrayBase);

// function onSuccess(somaNum) {
//   const numToBeDividedArray = [2, 3, 5, 10];
//   const dividedNumArray = numToBeDividedArray.map((e) => somaNum / e);
//   console.log('sucess: ' + dividedNumArray)
//   // return dividedNumArray;
  
// }

function onError() {
  console.log('💩É mais de oito mil! Essa promise deve estar quebrada!💩');
}

const p1 = new Promise((resolve, reject) => {
  const arrayBase = [];
  let i = 0;

  while (i < 10) {
    let randomNum = Math.ceil(Math.random() * 50);
    arrayBase.push(randomNum);
    i++;
  }

  const somaDosQuadradosDoArray = arrayBase.reduce(
    (total, item) => total + item ** 2,
  );

  somaDosQuadradosDoArray < 8000 ? resolve(somaDosQuadradosDoArray) : reject();
});

p1.then(somaNum => [2, 3, 5, 10].map(e => {
  console.log(`Número ${somaNum} divido por ${e}, entra no array como ${somaNum / e}`);
  return (somaNum / e);
}))
.then(arrayReturned => console.log(`second success: A soma dos itens do array dão: ${arrayReturned.reduce((total, item) => total + item)}`))
.catch(onError);

// 3. Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

// 5.Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.