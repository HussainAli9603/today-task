// backend/src/modules/product/product.routes.js
const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find().limit(8); // example limit
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;