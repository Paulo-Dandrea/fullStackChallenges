const express = require('express');
const { User } = require('../models');
const router = express.Router();


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


module.exports = router;
