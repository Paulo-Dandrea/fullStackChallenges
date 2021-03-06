const { MongoClient } = require('mongodb');

const DB_NAME = 'rest_exercises';
const DB_URI = `mongodb://localhost:27017/${DB_NAME}`;

let connection;

const getCollection = async (collectionName) => {
  connection =
    connection ||
    (await MongoClient.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }));

  return connection.db(DB_NAME).collection(collectionName);
};

module.exports = getCollection;
