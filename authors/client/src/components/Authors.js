import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Authors = () => {
  const [showAuthors, setShowAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        console.log(res.data);
        res.data.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        );
        setShowAuthors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/${id}`)
      .then((res) => {
        console.log(res);
        const currentAuthors = showAuthors.filter(() => {
          return currentAuthors._id !== id;
        });
        setShowAuthors(currentAuthors);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <section>
        <Link
          style={{ height: "100%", width: "50%", display: "inline-flex" }}
          to={"/new"}
        >
          Add an author
        </Link>
      </section>
      <section>
        <form>
          <table
            style={{
              height: "100%",
              width: "50%",
              display: "inline-table",
              border: "solid",
            }}
            className="table table-striped"
          >
            <caption
              style={{
                color: "blue",
              }}
              className="table caption-top"
            >
              We have quotes by:
            </caption>
            <thead
              style={{
                color: "white",
                backgroundColor: "lightgrey",
              }}
              className="table table-active table-bordered"
            >
              <tr>
                <th scope="col">Author</th>
                <th scope="col">Actions avaliable</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {showAuthors.map((author, i) => (
                <tr key={author._id}>
                  <td
                    style={{
                      verticalAlign: "middle",
                    }}
                  >
                    {author.name}
                  </td>
                  <td>
                    <Link
                      className="btn btn-secondary"
                      href="#"
                      role="button"
                      to={`/edit/${author._id}`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(author._id)}
                      style={{ marginLeft: 5 }}
                      className="btn btn-secondary"
                      type="submit"
                      name="delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </section>
    </div>
  );
};

export default Authors;
