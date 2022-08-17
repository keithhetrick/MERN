import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const newAuthor = () => {
  const [author, setAuthor] = useState("");
};

const { id } = useParams();
const navigate = useNavigate();

const NewAuthor = () => {
  return (
    <div>
      <section>
        <h1>Favorite authors</h1>
        <Link to={"/"}>Home</Link>
        <p>Add a new author:</p>
      </section>
      <form>
        <label>Name:</label>
        <input />
        <button type="submit" name="cancel">
          Cancel
        </button>
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewAuthor;
