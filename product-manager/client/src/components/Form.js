import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/products/create", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setTitle("");
        setPrice("");
        setDescription("");
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Product Manager</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label className="col-sm-2 col-form-label">Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label className="col-sm-2 col-form-label">Price</label>
          <input type="number" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label className="col-sm-2 col-form-label">Description</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className="btn btn-secondary btn-sm" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
