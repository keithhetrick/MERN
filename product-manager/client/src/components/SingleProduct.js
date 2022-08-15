import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        setSingleProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const deleteHandler = (clearProductID) => {
    axios
      .delete(`http://localhost:8000/products/${clearProductID}`)
      .then((res) => {
        console.log(singleProduct._id);
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-7 mx-auto mt-5">
      <h1 className="col-6 d-block mx-auto">{singleProduct.title}</h1>
      <h4 className="col-6 d-block mx-auto">{singleProduct.description}</h4>
      <h6 className="col-6 d-block mx-auto">${singleProduct.price}</h6>
      <Link to={`/products/edit/${singleProduct._id}`}>Edit</Link>
      <br />
      <button
        onClick={() => deleteHandler(singleProduct._id)}
        type="submit"
        className="btn btn-danger"
      >
        delete
      </button>
    </div>
  );
};

export default SingleProduct;
