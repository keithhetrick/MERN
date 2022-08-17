import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EditAuthor = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/author/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault
      // axios
      .putt("http://localhost:8000/author")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
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
          style={{ height: "100%", width: "50%", display: "inline-table" }}
          className="table table-bordered"
        >
          <caption className="table caption-top">Edit this author:</caption>
          <thead>
            <tr>
              <th>Name:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  style={{ marginLeft: 5 }}
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  to={"/"}
                >
                  Cancel
                </Link>
                <Link
                  style={{ marginLeft: 5 }}
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  to={"/"}
                >
                  Submit
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default EditAuthor;
