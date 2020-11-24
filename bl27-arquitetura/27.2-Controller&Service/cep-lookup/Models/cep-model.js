const connection = require('./connect');

const insertCEPonMongo = async (CEP, UF, cidade, bairro, logradouro) => {
  connection().then((db) =>
    db.collection('CEP').insertOne({ CEP, UF, cidade, bairro, logradouro }),
  );
};

const getAllCachedCeps = async () => 
  connection()
  .then((db) => db.collection('CEP').find().toArray())


module.exports = {
  insertCEPonMongo,
  getAllCachedCeps
}