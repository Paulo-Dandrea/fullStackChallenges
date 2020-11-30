const express = require('express');
const routes = require('./src/Routes/crmRoutes');

const app = express();
const PORT = 4000;

routes(app);

app.get('/', (req, res) => {
  res.send(`node and express server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});