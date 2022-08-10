import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title: title,
        price: price,
        description: description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setTitle("");
        setPrice("");
        setDescription("");
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
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Title
          </label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Price
          </label>
          <input type="number" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Description
          </label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </div>
      </form>
      <button className="btn btn-secondary btn-sm" type="submit">
        Create
      </button>
    </div>
  );
};

export default Form;
