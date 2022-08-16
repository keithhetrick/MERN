import "./App.css";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import SingleProduct from "./components/SingleProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/products/" element={<ProductList />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
