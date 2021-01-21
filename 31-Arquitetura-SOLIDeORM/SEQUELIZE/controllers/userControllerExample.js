const express = require('express');
const { User } = require('../models');
const router = express.Router();
const rescue = require('express-rescue');

// /_ Busca um usuário _/
router.get('/:id', (req, res, next) => {
  User.findByPk(req.params.id)
    .then((user) => {
      if (user === null) {
        return res.status(404).send({ message: 'Usuário não encontrado' });
      }
      return res.status(200).json(user);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

// get all users

router.get('/', (req, res) => {
  User.findAll()
    .then((users) => {
      return res.status(200).json(users);
    })
    .catch((err) => {
      console.log(e.message);
      res.status(500).json({ message: 'algo deu errado' });
    });
});

// cria um novo livro

router.post(
  '/',
  rescue(async (req, res) => {
    const { fullname, email } = req.body;

    const user = await User.create({ fullname, email });
    return res
      .status(200)
      .json({
        user,
        message: `${fullname}, seu perfil foi criado com sucesso. Seu id é: ${user.id}`,
      });
  }),
);

router.delete('/:id', rescue(async (req, res) => {
  const { id } = req.params;

  const destroyed = await User.destroy({
    where: {
      id
    }
  })

  return res.status(200).json({message: 'Usuário deletado com sucesso'})

}))

// router.put

module.exports = router;
