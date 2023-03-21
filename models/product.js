const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RECYCLE = 'RECYCLE';
const GARBAGE = 'GARBAGE';
const ORGANIC = 'ORGANIC';

const ProductSchema = new Schema({
  icon: {
    type: String,
  },
  name: {
    type: String,
  },
  wayToRecycler: {
    type: String,
  },
  type: {
    type: String,
  },
});

const Product = mongoose.model('product', ProductSchema);

module.exports = {
  Product,
  RECYCLE,
  GARBAGE,
  ORGANIC,
};
