const authorsController = require("../controllers/authors.controller");

module.exports = (app) => {
  app.post("/", authorsController.addAuthor);
  app.get("/", authorsController.showAllAuthors);
  app.get("/:id", authorsController.findOneAuthor);
  app.put("/edit/:id", authorsController.editAuthor);
  app.delete("/:id", authorsController.deleteAuthor);
};
