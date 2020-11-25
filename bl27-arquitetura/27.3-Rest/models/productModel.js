const getCollection = require('./get-collection');
const { ObjectId} = require('mongodb')

const add = async (name, brand) =>
  getCollection('products')
    .then((products) => products.insertOne({ name, brand }))
    .then((result) => ({ _id: result.insertedId, name, brand }));

const getAll = async () =>
  getCollection('products').then((products) => products.find().toArray());
  
  const getById = async (id) =>
    getCollection('products').then((products) => products.findOne(ObjectId(id)));


module.exports = { add, getAll, getById };
