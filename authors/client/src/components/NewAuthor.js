import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const NewAuthor = () => {
  const [author, setAuthor] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/", { author })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err);
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
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                />
              </td>
              {error.author ? <p>{error.author.message}</p> : null}
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

export default NewAuthor;
