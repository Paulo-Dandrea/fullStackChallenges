const boom = require('@hapi/boom');

module.exports = (err, req, res, next) => {
  // se o erro foi jogado por um de nossos Booms
  if (boom.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
  }

  console.error(err);
  // caso seja um erro de sistema,isso abaixo pode ajudar a debuggar
  res.status(500).json({
    message: 'Algo deu errado',
    details: err.message,
    endpoint: `${req.method} ${req.path}`,
  });
};

