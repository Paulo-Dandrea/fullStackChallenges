const fs = require("fs").promises;
const path = require("path");
const express = require("express");
const router = express.Router();

const readSimpsonsFile = async () => {
  const simpsonsData = await fs.readFile(
    path.resolve(__dirname, ".", "simpsons.json"),
    "utf-8",
  );
  return JSON.parse(simpsonsData);
};

router.get("/", async (req, res) => {
  const data = await readSimpsonsFile();
  res.status(200).send(data);
});

// 8 - Crie um endpoint do tipo GET na rota /simpsons/:id que deve retornar apenas o personagem com o id informado na URL da requisição.

router.get('/:id', async (req, res) => {
  const data = await readSimpsonsFile();
  const charID = req.params.id;
  const charDocument = data.find(e => e.id === charID);
  try {
  res.status(200).send(charDocument);
  }catch(err) {
    res.status(500).send(`Algo deu errado. Messagem: ${err.message}`)
  }
})

// 9 - Crie um endpoint do tipo POST na rota /simpsons que será responsável por cadastrar novos personagens.

const writeOnSimpsonsFile = async ({id, name}) => {
  const oldData = await readSimpsonsFile(); // é um array
  const newData = [...oldData, {id, name}]
  fs.writeFile(path.resolve(__dirname, '.', 'simpsons.json'), JSON.stringify(newData));
}

router.post('/', (req, res) => {
  
  writeOnSimpsonsFile(req.body)
})

module.exports = router;