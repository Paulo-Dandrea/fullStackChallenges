const readline = require('readline-sync');

const name = readline.question("What is your name?");
const age = readline.question("How old you are?");
// Bom jeito de escrever console log com variáveis. Mais rápido que template string.
console.log("Seja bem vindo, mestre %s. Você tem %s anos?", name, age);