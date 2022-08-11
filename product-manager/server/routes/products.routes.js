const ProductsController = require("../controllers/products.controller");

module.exports = (app) => {
  app.get("/api", ProductsController.index);
  app.get("/api/products/", ProductsController.getProducts);
  app.post("/api/products/create", ProductsController.createProduct);
};
