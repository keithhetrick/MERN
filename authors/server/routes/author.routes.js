const AuthorsController = require("../controllers/authors.controller");

module.exports = (app) => {
  app.get("/", AuthorsController.index);
  app.get("/", AuthorsController.showAllAuthors);
  app.post("/new", AuthorsController.addAuthor);
  app.put("/edit/:id", AuthorsController.editAuthor);
  app.delete("/", AuthorsController.deleteAuthor);
};
