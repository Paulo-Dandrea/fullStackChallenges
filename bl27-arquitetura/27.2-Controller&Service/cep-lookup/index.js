const express = require('express');
const bodyParser = require('body-parser');
// const { insertCEP, getAllCachedCeps } = require('./Models/cep-model');
const cepControllers = require('./Controllers/cepController');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`SERVER for cep-lookup LISTENING ON ${PORT}`),
);

app.get('/lookup', cepControllers.getAll, cepControllers.insertCEP)
