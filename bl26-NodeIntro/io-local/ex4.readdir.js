// Exercício 4: Recrie o script do exercício 3 utilizando apenas funções assíncronas.
// Dica: utilize a função readdir do módulo fs do Node.js.

const fs = require("fs").promises;

async function sizeOfFilesInAnDirectory(directory) {
  // Ponto inicial do console.time
  console.time("Tempo que levou para o script rodar");

  const data = await fs.readdir(directory); // Reading a directory full of photos: Returns an array;

  console.log("Quantidade de arquivos: %s", data.length);
  console.log("arquivos: %s ", data);

  const arrayOfLengthsResolved = await Promise.all(
    data.map(async (e) => {
      const filePath = directory + "/" + e;
      const fileData = await fs.readFile(filePath);
      return fileData.byteLength;
    }),
  );

  console.log("tamanho de cada arquivo: %s ", arrayOfLengthsResolved);

  const sumOfLengths = arrayOfLengthsResolved.reduce(
    (acc, value) => acc + value,
  );

  console.log("tamanho das fotos juntas em bytes: %s ", sumOfLengths);

  // ponto final do console.time
  console.timeEnd("Tempo que levou para o script rodar");
}

sizeOfFilesInAnDirectory("../../../plane");
console.log(" C++ API rodando por fora");

// Script Síncrono rodou em: 424.403ms

// '' Assíncrono rodou em: 42.368s
