// Exercício 2: Crie um script que realize as mesmas funcionalidades que o script do exercício 1, mas utilizando apenas funções assíncronas, de forma que os dois arquivos sejam lidos ao mesmo tempo.
// Dica: utilize a função readFile do módulo fs do Node.js.


const fs = require("fs").promises;

const readingFileAsyncronously = async () => {
  console.time('tempo de leitura: '); // label para startar o tempo que leva daqui
  
  const pdf = await fs.readFile(
    "../../../AdvancedCSS/slides-students-C04.pdf");
  console.log('pdf tem este tamanho: %s: ', pdf.byteLength);

  const foto = await fs.readFile(
    "../../../plane/IMG_1158.jpg");
  console.log('foto tem este tamanho: %s: ', foto.byteLength);

  console.timeEnd('tempo de leitura: '); // até aqui
};

readingFileAsyncronously();
