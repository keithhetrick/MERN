import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const deleteHandler = (productID) => {
    axios
      .delete(`http://localhost:8000/products/${productID}`)
      .then((res) => {
        const newProductList = products.filter(
          (product, i) => product._id !== productID
        );
        setProducts(newProductList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row">
      <h1>Products:</h1>
      <div className="d-flex flex-wrap">
        {products.map((product, i) => {
          return (
            <div className="col col-4 mt-3" key={i}>
              <h1 className="col-7 d-block mx-auto">{product.title}</h1>
              <Link to={`/products/${product._id}`}>
                click for more details
              </Link>
              <br />
              <button
                onClick={() => deleteHandler(product._id)}
                type="submit"
                className="btn btn-danger"
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
