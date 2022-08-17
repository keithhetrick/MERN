import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const EditAuthor = () => {
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/author`)
  //     .then((res) => {
  //       console.log(res.data);
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div>
      <section>
        <Link to={"/"}>Home</Link>
        <p>Edit this author:</p>
      </section>
      <form>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <Link className="btn btn-primary" href="#" role="button" to={"/"}>
          Cancel
        </Link>
        <Link className="btn btn-primary" href="#" role="button" to={"/"}>
          Submit
        </Link>
      </form>
    </div>
  );
};

export default EditAuthor;
