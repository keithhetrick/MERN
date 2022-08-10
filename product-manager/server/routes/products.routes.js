const ProductsController = require("../controllers/products.controller");

module.exports = (app) => {
  app.get("/api", ProductsController.index);
  app.post("/api/products", ProductsController.createProduct);
};
