import "./App.css";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/products/" element={<ProductList />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
