const connection = require('./connect');
const axios = require('axios');

const getCachedCepFromMongo = async (CEP) =>
  connection().then((db) => db.collection('CEP').findOne({ cep }))

const insertCEPonMongo = async (CEP, UF, cidade, bairro, logradouro) => {
  connection().then((db) =>
    db.collection('CEP').insertOne({ CEP, UF, cidade, bairro, logradouro }),
  );
};

const getAllCachedCeps = async () =>
  connection().then((db) => db.collection('CEP').find().toArray());

const getCepFromApi = async (cep) =>
  axios
    .get(`http://cep.la/${cep}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    .then((res) => res.data);

module.exports = {
  insertCEPonMongo,
  getAllCachedCeps,
  getCepFromApi,
  getCachedCepFromMongo,
};
