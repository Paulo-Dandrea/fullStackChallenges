const connection = require('./connect');

const insertCEP = async (CEP, UF, cidade, bairro, logradouro) => {
  connection().then((db) =>
    db.collection('CEP').insertOne({ CEP, UF, cidade, bairro, logradouro }),
  );
};

module.exports = {
  insertCEP
}