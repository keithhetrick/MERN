import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams;
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        setSingleProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="col-7 mx-auto mt-5">
      <h1 className="col-6 d-block mx-auto">{singleProduct.title}</h1>
      <h4 className="col-6 d-block mx-auto">{singleProduct.description}</h4>
      <h6 className="col-6 d-block mx-auto">${singleProduct.price}</h6>
    </div>
  );
};

export default SingleProduct;
