const AuthorsController = require("../controllers/authors.controller");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = (app) => {
  app.get("/", AuthorsController.index);
  app.get("/", AuthorsController.showAllAuthors);
  app.post("/new", AuthorsController.addAuthor);
  app.put("/edit/:id", AuthorsController.editAuthor);
  app.delete("/", AuthorsController.deleteAuthor);
};
