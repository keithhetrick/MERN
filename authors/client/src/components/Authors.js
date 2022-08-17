import React from "react";
import { Link } from "react-router-dom";

const Authors = () => {
  return (
    <div>
      <section>
        <h1>Favorite authors</h1>
        <Link to={"/new"}>Add an author</Link>
        <p>We have quotes by:</p>
      </section>
      <section>
        <main>
          <form>
            <table>
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
                    <Link to={"/edit/:id"}>Edit</Link>
                    <button type="submit" name="delete">
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
