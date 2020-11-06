const readline = require('readline-sync');

const calculaIMC = () =>  {

  const weight = readline.questionFloat("Qual é seu peso?");
  const height= readline.questionFloat("Digite sua altura: ");

  return (weight / (height ** 2)).toFixed(2);
}

console.log(calculaIMC())