const Utils = require('../utils/utils');

const { Product } = require('../models/product');

module.exports = {
  getAllProducts(req, res, next) {
    Product.find({})
      .then((products) => res.send(Utils.response(products)))
      .catch(next);
  },
};
