const express = require('express');
const Users = require('./Models/Users');

const app = express();

app.use('/', express.json());

app.post('/user', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!Users.userIsValid(first_name, last_name, email, password)) {
    res.status(200).json({ message: 'Dados Invállidos' });
  }
  await Users.createNewUser(first_name, last_name, email, password);

  res.status(201).json({ message: 'Usuário criado com sucesso' });
});

const PORT = 3000;

app.listen(PORT, () => console.log('vai na 300'));
