import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const NewAuthor = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/", { name })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.errors.name.message);
        setError(err.response.data.errors);
      });
  };

  return (
    <div className="container">
      <section>
        <Link
          style={{ height: "100%", width: "50%", display: "inline-flex" }}
          to={"/"}
        >
          Home
        </Link>
      </section>
      <form onSubmit={handleSubmit}>
        <table
          style={{
            height: "100%",
            width: "50%",
            display: "inline-table",
            border: "solid",
            borderColor: "lightgrey",
          }}
        >
          <caption
            style={{
              color: "blue",
            }}
            className="table caption-top"
          >
            Edit this author:
          </caption>
          <thead>
            <tr>
              <th
                style={{
                  color: "grey",
                }}
              >
                Name:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {error.name ? <p>{error.name.message}</p> : null}
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  style={{ margin: 5 }}
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  to={"/"}
                >
                  Cancel
                </Link>
                <button
                  style={{ marginLeft: 5 }}
                  className="btn btn-primary"
                  type="submit"
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default NewAuthor;
