// const fs = require('fs');

// function readFilePromise (fileName) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, content) => {
//       if (err) return reject(err);
//       resolve(content);
//     });
//   });
// }

// readFilePromise('file1.txt')
//   .then((content) => {
//     console.log(`Lido file1.txt com ${content.byteLength} bytes`);
//     return readFilePromise('file2.txt');
//   })
//   .then(content => {
//     console.log(`Lido file2.txt com ${content.byteLength} bytes`);
//     return readFilePromise('file3.txt');
//   })
//   .then((content) => {
//     console.log(`Lido file3.txt com ${content.byteLength} bytes`);
//   })
//   .catch((err) => {
//     console.log(`Erro ao ler arquivos: ${err.message}`);
//   });

// Exercício 3: Crie um script que, sem utilizar módulos de terceiros:
// DICA: Leia sobre o módulo readline do node.
// Pergunte ao usuário qual arquivo deseja ler.
// Leia o arquivo indicado (Não se esqueça de realizar tratamento de erros caso o usuário informe um arquivo que não existe).
// Escreva na tela o conteúdo do arquivo e a quantidade de bytes.

// Promises

// const readline = require("readline");
// const fs = require("fs");

// const readFilePromise = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName,'utf-8', (err, content) => {
//       if(err) return reject(err);
//       resolve(content)
//     })
//   })
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Que arquivo deseja ler? ", (answer) => {
//   readFilePromise(answer)
//   .then(resule => console.log(resule))
//   rl.close();
// });

// 'meu-arquivo.txt'

// Promises

// const readline = require("readline");
// const fs = require("fs");
// const util = require('util');
// const path = require('path');

// const readFile = util.promisify(fs.readFile);

// const question = (mensagem) => {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   return new Promise((resolve, reject) => {
    
//     rl.question(mensagem, (answer) => {
//       rl.close();
//       resolve(answer)
//     });
//   })
// }
// // peguei o gabarito
// question('Digite o caminho do arquivo que deseja ler: ')
//   .then((answer) => readFile(path.resolve(__dirname, answer)))
//   .then((file) => {
//     console.log(file.toString('utf8'));
//     console.log('---------------------');
//     console.log(`Arquivo de ${file.byteLength} bytes,`);// no gabarito, mas não funciona: ' lido em ${file.scryptEnd}ms'
//   })
//   .catch(err => console.log(`Erro ao ler arquivo: ${err.message}`));

// Async Await

const readline = require("readline");
const fs = require("fs");
const util = require('util');
const path = require('path');

const readFile = util.promisify(fs.readFile);

const question = (mensagem) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    
    rl.question(mensagem, (answer) => {
      rl.close();
      resolve(answer)
    });
  })
}

const start = async () => {
  const answer = await question('digite o caminho');

  try {
    const file = await readFile(path.resolve(__dirname, answer));
    console.log(file.toString('utf-8'));
    console.log('Arquivo de %s bytes', file.byteLength);
  } catch(err) {
    console.log('Erro ao ler o arquivo: %s', err.message);
  }
}

start();