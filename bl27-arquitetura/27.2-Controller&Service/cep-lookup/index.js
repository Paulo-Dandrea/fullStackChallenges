const express = require('express');
const bodyParser = require('body-parser');
const { insertCEP } = require('./Models/cep-model');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`SERVER for cep-lookup LISTENING ON ${PORT}`),
);

app.get('/lookup/:cep', (req, res) => {
  const { cep } = req.params;
  insertCEP(cep)
  console.log(cep);
})