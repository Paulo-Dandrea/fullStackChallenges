const express = require('express');

const Author = require('./Models/Author');

const app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.json())

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const authorById = await Author.findById(req.params.id);
  console.log(authorById);

  res.status(200).json(authorById);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  // if (!Author.isValid(first_name, middle_name, last_name)) {
  //   console.log('entrou no author is valid');
  //   return res.status(400).json({ message: 'Dados inválidos' });

  //   }
    console.log('creating?');

    await Author.create(first_name, middle_name, last_name); // Ele está escrevendo no banco mas...

    res.status(201).json({message: "Autor criado com sucesso!"}); // ...acaba não entrando aqui
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
