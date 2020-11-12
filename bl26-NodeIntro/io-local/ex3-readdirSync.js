// Exercício 3: Crie um script NodeJS que, utilizando apenas funções síncronas e módulos padrão do NodeJS, receba o nome de uma pasta e:
// Escreva a quantidade de arquivos existentes dentro dela;
// Escreva a soma do tamanho de todos os arquivos presentes nela;
// Escreva no terminal o tempo total de execução do script.
// Dica: utilize a função readdirSync do módulo fs do Node.js.
const fs = require('fs');



function sizeOfFilesInAnDirectory (directory) {
// Ponto inicial do console.time  
console.time('Tempo que levou para o script rodar');

const data = fs.readdirSync(directory); // Reading a directory full of photos: Returns an array;

console.log('arquivos: %s ', data);
console.log('Quantidade de arquivos: %s', data.length);

const sumOfLengths = data.reduce((acc, value) => {
  const filePath = directory + '/' + value
  const fileData = fs.readFileSync(filePath);
  return  acc + fileData.byteLength
}, 0)

console.log('tamanho das fotos juntas em bytes: %s ', sumOfLengths);

// ponto final do console.time
console.timeEnd('Tempo que levou para o script rodar');
}

sizeOfFilesInAnDirectory('../../../plane');