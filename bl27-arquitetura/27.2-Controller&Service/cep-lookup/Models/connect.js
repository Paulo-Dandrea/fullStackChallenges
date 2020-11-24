const { MongoClient } = require('mongodb');

const connection = async () => {
  return MongoClient.connect(
    process.env.DB_URL, // .env
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
    .then((conn) => conn.db('cep_lookup'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connection;
