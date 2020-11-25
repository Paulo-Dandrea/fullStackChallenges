const getCollection = require('./get-collection');

const add = async (name, brand) =>
  getCollection('products')
    .then((products) => products.insertOne({ name, brand }))
    .then((result) => ({ _id: result.insertedId, name, brand }));

// const create = async (name, age, phoneNumbers) =>
//   getCollection('people')
//     .then((people) => people.insertOne({ name, age, phoneNumbers }))
//     .then((result) => ({ _id: result.insertedId, name, age, phoneNumbers }));
