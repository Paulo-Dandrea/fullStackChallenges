const CEPisValid = (cep) => /\d{5}-?\d{3}/g.test(cep);

module.exports = { CEPisValid };
