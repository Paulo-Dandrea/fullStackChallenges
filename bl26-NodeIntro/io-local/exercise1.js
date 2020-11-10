// Exercício 1: Crie uma função que retorna uma promise.
// Essa função deve receber três parâmetros, fazendo o tratamento de erro caso algum dos parâmetros não seja um número.
// Caso algum dos parâmetros não seja do tipo Number, rejeite a promise e imprima na tela a frase "Digite apenas números".
// Caso todos os parâmetros sejam do tipo Number, você deve somar os dois primeiros.
// Depois, pegue o resultado da soma e multiplique pelo terceiro parâmetro, e caso seja menor que 50, rejeite a promise com a mensagem "Valor muito baixo".
// Caso contrário, aceite a promise, imprimindo o resultado da multiplicação na tela.

const calcWithPromisses = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if(isNaN(a) || isNaN(b) || isNaN(c)){
      reject(new Error('Digite apenas números'))
    }
    resolve(a + b)})
    .then(soma => {
      if((soma + c) > 50) {
        return (soma + c)
      }
      return Promise.reject(new Error ('valor muito baixo'))
    }).catch(err => console.log(err))
}

calcWithPromisses(1,50,3).then(r => console.log(r))