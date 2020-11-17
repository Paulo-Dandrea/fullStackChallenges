const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send({"message": "pong"})
})
// 3 - Crie um endpoint que receba requisições do tipo POST no caminho /hello , contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON { "message": "Hello, <nome do usuário>!" } 
app.post('/hello', (req, res) => {
  res.send({"message": `Hello, ${req.body.name}`})
})

// 4 - Crie um endpoint que receba requisições do tipo POST no caminho /hello , contendo o JSON { "name": "<nome do usuário>", "age": "<idade do usuário>" } . Caso o usuário tenha idade superior a 17 anos, retorne um JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 . Caso contrário, retorne o JSON { "message": "Unauthorized"} com o status code 401 ;

// app.put()

// 5 - Crie um endpoint que receba requisições do tipo PUT no caminho /users/:name/:age e retorne o JSON { "message": "Seu nome é <name> e você tem <age> anos de idade" } .


app.listen(PORT, () => {
  console.log(`Server on port ${PORT} entered`);
})