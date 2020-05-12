//  Atenção, este programa não roda no terminal do vscode, apenas no terminal externo. 


var readlineSync = require('readline-sync');
 

let a = readlineSync.question('Digite um número:');
let b = readlineSync.question('Digite outro: ');

a = parseInt(a);
b = parseInt(b);

let operadorString = ['somar','subtrair','multiplicar','dividir', 'saber se é par ou impar'];
let resultado;
let index = readlineSync.keyInSelect (operadorString, 'O que deseja fazer?');

if (operadorString[0]){
    resultado = a + b;
    console.log('o resultado da sua soma é: ' + resultado) 
}
