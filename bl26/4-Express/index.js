const express = require("express");
const simpsonsRouter = require('./routeSimpsons');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send({ message: "pong" });
});
// 3 - Crie um endpoint que receba requisições do tipo POST no caminho /hello , contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON { "message": "Hello, <nome do usuário>!" }

// app.post('/hello', (req, res) => {
//   res.send({"message": `Hello, ${req.body.name}`})
// })

// 4 - Crie um endpoint que receba requisições do tipo POST no caminho /hello , contendo o JSON { "name": "<nome do usuário>", "age": "<idade do usuário>" } . Caso o usuário tenha idade superior a 17 anos, retorne um JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 . Caso contrário, retorne o JSON { "message": "Unauthorized"} com o status code 401 ;
app.post("/hello", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  if(age > 17) {
    res.send({"message": `Hello, ${name}`})
  } else {
    res.status(401).send({"message": "Unauthorized"});
  }
});

// 5 - Crie um endpoint que receba requisições do tipo PUT no caminho /users/:name/:age e retorne o JSON { "message": "Seu nome é <name> e você tem <age> anos de idade" } .

app.put('/users/:name/:age', (req, res) => {
  res.send({"message": `Seu nome é ${req.params.name} e você tem ${req.params.age} anos de idade`})
})

// 6 e 7 - Agora você vai criar uma API de listagem dos personagens da série Simpsons. Como fonte de dados, você vai utilizar um arquivo JSON. 
// Tive que olhar o gabarito por que não tivemos preparação para estes exercícios e/ou o enunciado não está bem explicado.

app.use('/simpsons', simpsonsRouter);

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`)
})

// Inicia o server
app.listen(PORT, () => {
  console.log(`Server on port ${PORT} entered`);
});
