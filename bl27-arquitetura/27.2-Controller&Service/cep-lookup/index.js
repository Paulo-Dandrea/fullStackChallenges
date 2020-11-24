const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`SERVER for cep-lookup LISTENING ON ${PORT}`),
);
