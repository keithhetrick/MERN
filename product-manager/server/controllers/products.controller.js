const Products = require("../model/products.model");

module.exports.index = (req, res) => {
  res.json({
    message: "Hello World",
  });
};

module.exports.createProduct = (req, res) => {
  Products.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json(err));
};

module.exports.findAllProducts = (req, res) => {
  Products.find()
    .then((allProduct) => res.json(allProduct))
    .catch((err) => res.json(err));
};

module.exports.findOneProduct = (req, res) => {
  Products.findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.deleteProduct = (req, res) => {
  Products.deleteOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.updateProduct = (req, res) => {
  Products.updateOne({ _id: req.params.id }),
    req.body,
    { new: true, runValidators: true }
      .then((product) => res.json(product))
      .catch((err) => res.json(err));
};
