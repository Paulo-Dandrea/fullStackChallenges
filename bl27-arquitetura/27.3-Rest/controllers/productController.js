const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();
// tirei o 'list-products' e deixei só '/'
// o index já tá tomando conta do '/products'
router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});
// tirei o 'get-by-id' e deixei só '/'
// o index já tá tomando conta do '/products'
router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(200).json(product);
});

// tirei /add-user e deixei só '/'
// o index já tá tomando conta do '/products'
router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});
// tirei 'delete-user/:id' e deixei só '/' -
// o index já tá tomando conta do '/products'
router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(204).end();
});
// tirei 'update-user/:id' e deixei só '/' -
// troquei de post para put, já que é um update
// o index já tá tomando conta do '/products'
router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(204).end();
});

module.exports = router;