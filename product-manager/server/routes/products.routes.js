const ProductsController = require("../controllers/products.controller");

module.exports = (app) => {
  app.get("/api", ProductsController.index);
  app.get("/api/products/", ProductsController.findProducts);
  app.post("/api/products/create", ProductsController.createProduct);
};
