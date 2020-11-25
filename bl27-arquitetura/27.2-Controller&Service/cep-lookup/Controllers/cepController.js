// const { getAllCachedCeps } = require('../Models/cep-model');
const cepModel = require('../Models/cep-model');
const cepService = require('../Service/cepService');

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
  const hifenLessCEP = cep.replace('-', '');
  if (!cepService.CEPisValid(hifenLessCEP)) {
    return res.status(400).json({ message: 'Cep não válido' });
  }
  // is CEP already on our Mongo Cache?
  const cachedCep = await cepModel.getCachedCepFromMongo(hifenLessCEP);
  if (cachedCep) {
    return res.status(200).json(cachedCep);
  }
  // If not in our DB, fetch document and put in our DB.
  const cepData = await cepModel.getCepFromApi(hifenLessCEP);
  const { uf, cidade, bairro, logradouro } = cepData;
  await cepModel.insertCEPonMongo(cep, uf, cidade, bairro, logradouro);

  return res.status(200).json(cepData)
};

module.exports = {
  getAll,
  insertCEP,
};
