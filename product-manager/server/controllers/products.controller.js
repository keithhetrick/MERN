const Products = require("../model/products.model");

module.exports.index = (req, res) => {
  res.json({
    message: "Hello World",
  });
};

module.exports.createProduct = (req, res) => {
  Products.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.getProducts = (req, res) => {
  Products.get(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};
