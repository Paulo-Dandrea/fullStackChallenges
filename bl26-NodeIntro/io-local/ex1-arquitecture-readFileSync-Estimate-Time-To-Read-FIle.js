// Dica: para os exercícios abaixo, use arquivos maiores que 10mb, ou a leitura será realizada em menos de 1 milissegundo, o que tira toda a graça. 😄
// Exercício 1: Utilizando apenas funções síncronas, crie um script que leia dois arquivos e:
// Escreva, no terminal, para cada arquivo, qual foi o tempo necessário para lê-lo do disco;
// Escreva, no terminal, para cada arquivo, seu tamanho em bytes;
// Escreva, no terminal, ao final do processo, qual o tempo total necessário para a execução completa do script.
// Dica: utilize a função readFileSync do módulo fs do Node.js.

const fs = require("fs");

const readingFile = () => {
  console.time('tempo de leitura: '); // label para startar o tempo que leva daqui
  
  const pdf = fs.readFileSync(
    "../../../AdvancedCSS/slides-students-C04.pdf");
  console.log('pdf tem este tamanho: %s: ', pdf.byteLength);

  const foto = fs.readFileSync(
    "../../../plane/IMG_1158.jpg");
  console.log('foto tem este tamanho: %s: ', foto.byteLength);

  console.timeEnd('tempo de leitura: '); // até aqui
};

readingFile();

