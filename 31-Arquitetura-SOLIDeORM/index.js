const express = require('express');
const router = require('./controllers/userControllerExample');

// console.log(express());
const app = express();

app.use('/', router)

app.listen(3000, () => console.log("to on"))

// GET /books - lista todos os livros;
// GET /book/:id - pega o livro com o id especificado;
// POST /book - cria um novo livro;
// POST /book/:id - sobrescreve o livro com ID selecionado;
// DELETE /book/:id - deleta um livro;
// Em caso de erro, os endpoints devem retornar status code 500 com a mensagem: 'Algo deu errado'.