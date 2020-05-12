//  Atenção, este programa não roda no terminal do vscode, apenas no terminal externo. 
// importante instalar primeiro por npm o modulo, digite desta forma abaixo no terminal:
// $ npm install readline-sync 

var readlineSync = require('readline-sync');
 

let a = readlineSync.question('Digite um número:');
let b = readlineSync.question('Digite outro: ');

a = parseInt(a);
b = parseInt(b);

let operadorString = ['somar','subtrair','multiplicar','dividir', 'saber se a soma da par ou impar'];
let resultado;
let index = readlineSync.keyInSelect (operadorString, 'O que deseja fazer?');

if (operadorString[0]){
    resultado = a + b;
    console.log('o resultado da sua soma é: ' + resultado) 
} else if (operadorString[1]){
    resultado = a - b;
    console.log ('o resultado da subtração é ' + resultado);
} else if (operadorString[2]){
    resultado = a * b;
    console.log ('o resultado da mutiplicação é: ' + resultado);
} else if (operadorString[3]){
    resultado = a / b;
    console.log ('o resultado da divisão é: ' + resultado)
} else if (operadorString[4]){
    if (((a+b) % 2) === 0){
        console.log ('a soma dá par');
    }else{
        console.log ('a soma da impar');
    }
}
