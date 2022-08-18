const Authors = require("../models/authors.model");

module.exports.showAllAuthors = (req, res) => {
  Authors.find()
    .then((allAuthors) => res.json(allAuthors))
    .catch((err) => res.status(400).json(err));
};

module.exports.addAuthor = (req, res) => {
  Authors.create(req.body)
    .then((newAuthor) => res.json(newAuthor))
    .catch((err) => res.status(400).json(err));
};

module.exports.findOneAuthor = (req, res) => {
  Authors.findOne({ _id: req.params.id })
    .then((findAuthor) => {
      res.json(findAuthor);
      console.log(findAuthor);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.editAuthor = (req, res) => {
  Authors.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((editAuthor) => {
      res.json(editAuthor);
      console.log(editAuthor);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
  Authors.deleteOne({ _id: req.params.id })
    .then((deleteAuthor) => {
      res.json(deleteAuthor);
      console.log(deleteAuthor);
    })
    .catch((err) => res.status(400).json(err));
};
