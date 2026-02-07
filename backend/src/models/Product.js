// backend/src/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  // image: String,   // add later if needed
});

module.exports = mongoose.model('Product', productSchema);