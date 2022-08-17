import React from "react";
import { Link } from "react-router-dom";

const Authors = () => {
  return (
    <div>
      <section>
        <Link
          style={{ height: "100%", width: "50%", display: "inline-flex" }}
          to={"/new"}
        >
          Add an author
        </Link>
      </section>
      <section>
        <main>
          <form>
            <table
              style={{ height: "100%", width: "50%", display: "inline-table" }}
              className="table"
            >
              <caption className="table caption-top">
                We have quotes by:
              </caption>
              <thead className="table table-active table-bordered">
                <tr>
                  <th scope="col">Author</th>
                  <th scope="col">Actions avaliable</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <td></td>
                  <td>
                    <Link
                      className="btn btn-secondary"
                      href="#"
                      role="button"
                      to={"/edit/:id"}
                    >
                      Edit
                    </Link>
                    <button
                      style={{ marginLeft: 5 }}
                      className="btn btn-secondary"
                      type="submit"
                      name="delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </main>
      </section>
    </div>
  );
};

export default Authors;
