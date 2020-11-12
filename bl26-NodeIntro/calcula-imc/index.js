// const readline = require('readline-sync');

// const calculaIMC = () =>  {

//   const weight = readline.questionFloat("Qual é seu peso?");
//   const height= readline.questionFloat("Digite sua altura: ");

//   return (weight / (height ** 2)).toFixed(2);
// }

// console.log(calculaIMC())

const readline = require('readline-sync');

// const calculaIMC = () =>  {

//   const weight = readline.questionFloat("Qual é seu peso?");
//   const height= readline.questionFloat("Digite sua altura: ");
//   let IMC = (weight / (height ** 2)).toFixed(2);
//   let situacaoIMC = '';

//   if(IMC < 18.5){
//     situacaoIMC = "Abaixo do Peso"
//   }
//   if(IMC > 18.5 && IMC < 25){
//     situacaoIMC = "Peso Normal"
//   }

//   if(IMC >= 25  && IMC < 30){
//     situacaoIMC = "Acima do Peso"
//   }

//   if(IMC >= 30 && IMC < 35){
//     situacaoIMC = "Obesidade grau I"
//   }

//   return `Seu IMC é ${IMC}: Você está com ${situacaoIMC}`
// }

// console.log(calculaIMC())

// IMC	Situação
// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9    	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II
// 40,0 e acima	Obesidade graus III e IV

const inquirer = require('inquirer');

const calculaIMC = (weight, height) =>  {
  let IMC = (weight / (height ** 2)).toFixed(2);
  let situacaoIMC = '';

  if(IMC < 18.5){
    situacaoIMC = "Abaixo do Peso"
  }
  if(IMC > 18.5 && IMC < 25){
    situacaoIMC = "Peso Normal"
  }

  if(IMC >= 25  && IMC < 30){
    situacaoIMC = "Acima do Peso"
  }

  if(IMC >= 30 && IMC < 35){
    situacaoIMC = "Obesidade grau I"
  }

  return `Seu IMC é ${IMC}: Você está com ${situacaoIMC}`
}


var questions = [
  {
    type: 'input',
    name: 'peso',
    message: 'Qual é seu peso?',
    validate: function (value) {
      if (!isNaN(value)) {
        return true
      }
      return 'Coloque um número válido'
    }
  },
  {
    type: 'input',
    name: 'altura',
    message: 'E altura?',
    validate: function(value) {
      if(!isNaN(value)) {
        return true
      }
      return 'Coloque um número válido'
    }
  }
];

inquirer.prompt(questions).then((answers) => {
  console.log(calculaIMC(answers.peso, answers.alturaread))
  // console.log(JSON.stringify(answers, null, '  '));
});