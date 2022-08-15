const ProductsController = require("../controllers/products.controller");

module.exports = (app) => {
  app.get("/", ProductsController.index);
  app.get("/products/", ProductsController.findAllProducts);
  app.get("/products/:id", ProductsController.findOneProduct);
  app.post("/products/create", ProductsController.createProduct);
  app.put("/products/:id", ProductsController.updateProduct);
  app.delete("/products/:id", ProductsController.deleteProduct);
};
