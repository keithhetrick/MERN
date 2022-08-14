const ProductsController = require("../controllers/products.controller");

module.exports = (app) => {
  app.get("/", ProductsController.index);
  app.get("/products/", ProductsController.findAllProducts);
  app.get("/products/:id", ProductsController.findOneProduct);
  app.get("/editproducts/:id", ProductsController.updateProduct);
  app.post("/products/create", ProductsController.createProduct);
  app.delete("/products/:id", ProductsController.deleteProduct);
};
