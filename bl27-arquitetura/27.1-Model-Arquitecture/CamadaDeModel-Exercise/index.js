const express = require('express');
const Users = require('./Models/Users');
const Middlewares = require('./Middlewares/index');

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

app.get('/user', async (req, res) => {
  const allUsers = await Users.getAll();

  res.status(200).json(allUsers);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await Users.getById(id);

  if (user) {
    return res.status(200).json(user);
  }

  return res.status(400).json({ message: 'Usuário não encontrado' });
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;

  if (!Users.userIsValid(first_name, last_name, email, password)) {
    return res.status(200).json({ message: 'Dados Inválidos' });
  }

  await Users.update(id, first_name, last_name, email, password);

  return res.status(200).json({message: 'Usuário atualizado com sucesso'})
});

app.delete('/user/:id', async (req, res) => {
  await Users.exclude(req.params.id);
  res.status(200).json({message : 'Usuário deletado com sucesso'});
})

app.use(Middlewares.error);

const PORT = 3000;

app.listen(PORT, () => console.log('vai na 300'));
