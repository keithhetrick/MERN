import React from "react";
import { Link } from "react-router-dom";

const Authors = () => {
  return (
    <div>
      <section>
        <Link to={"/new"}>Add an author</Link>
        <p>We have quotes by:</p>
      </section>
      <section>
        <main>
          <form>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Actions avaliable</th>
                </tr>
              </thead>
              <tbody>
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
