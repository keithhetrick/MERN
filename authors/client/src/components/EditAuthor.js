import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditAuthor = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/${id}`)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.name);
        setName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/edit/${id}`, { name })
      .then((res) => {
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
            <tr
              style={{
                color: "grey",
              }}
            >
              <th>Name:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
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

export default EditAuthor;
