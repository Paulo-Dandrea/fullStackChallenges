// const { getAllCachedCeps } = require('../Models/cep-model');
const axios = require('axios');
const cepModel = require('../Models/cep-model');

const getAll = async (req, res, next) => {
  const { cep } = req.query;
  if (!cep) {
    const cachedCeps = await cepModel.getAllCachedCeps();
    return res.status(200).json(cachedCeps);
  }
  next();
};

const insertCEP = async (req, res) => {
  const { cep } = req.query;
  const cepData = await axios.get(
    `http://cep.la/${cep}`,
    {
      headers: {
        'Accept': 'application/json',
      },
    },
  ).then((res) => res.data);
  const { uf, cidade, bairro, logradouro } = cepData;

  cepModel.insertCEPonMongo(cep, uf, cidade, bairro, logradouro);
  
//  console.log(cepData);
};

module.exports = {
  getAll,
  insertCEP,
};
