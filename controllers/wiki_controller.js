const Utils = require('../utils/utils');

const { Product } = require('../models/product');

const mongoose = require('mongoose');

module.exports = {
  searchProducts(req, res, next) {
    var { search } = req.query;

    if (search === '') {
      Product.find({})
        .then((products) => res.send(Utils.response(products)))
        .catch(next);
    } else {
      Product.find({
        $or: [
          {
            name: {
              $regex: new RegExp(search, 'i'),
            },
          },
          {
            type: {
              $regex: new RegExp(search, 'i'),
            },
          },
        ],
      })
        .then((products) => res.send(Utils.response(products)))
        .catch(next);
    }
  },

  addProduct(req, res, next) {
    const productProps = req.body;

    Product.findOneAndUpdate(
      {
        _id: mongoose.Types.ObjectId(),
      },
      productProps,
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      },
    )
      .then((product) => {
        res.send(Utils.response(product));
      })
      .catch(next);
  },

  removeProduct(req, res, next) {
    const productId = req.params.id;

    Product.findOneAndRemove({ _id: productId })
      .then((product) => {
        res.send(Utils.response(true));
      })
      .catch(next);
  },
};
