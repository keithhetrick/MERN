const Authors = require("../model/authors.model");

module.exports.index = (req, res) => {
  res.json({
    message: "Back-end database connection working",
  });
};

module.exports.showAllAuthors = (req, res) => {
  Authors.find()
    .then((allAuthors) => res.json(allAuthors))
    .catch((err) => res.json(err));
};

module.exports.addAuthor = (req, res) => {
  Authors.create(req.body)
    .then((newAuthor) => res.json(newAuthor))
    .catch((err) => res.json(err));
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
    .catch((err) => res.json(err));
};

module.exports.deleteAuthor = (req, res) => {
  Authors.deleteOne({ _id: req.params.id })
    .then((deleteAuthor) => {
      res.json(deleteAuthor);
      console.log(deleteAuthor);
    })
    .catch((err) => res.json(err));
};
