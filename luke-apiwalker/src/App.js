import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Films from "./components/Films";
import People from "./components/People";
import Planets from "./components/Planets";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";

function App() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [root, setRoot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${root}/${id}`);
  };

  return (
    <div className="App">
      <h1>Star Wars API</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <label>Search for: </label>
          <select
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onChange={(e) => setRoot(e.target.value)}
          >
            <option></option>
            <option>Films</option>
            <option>People</option>
            <option>Planets</option>
            <option>Species</option>
            <option>Starships</option>
            <option>Vehicles</option>
          </select>
          <label>ID: </label>
          <input
            className="id-input"
            type="number"
            min="1"
            max="99"
            pattern="[1-9]"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </form>
      </section>
      <main>
        <Routes>
          <Route path="/films/:id" element={<Films id={id} />} />
          <Route path="/people/:id" element={<People id={id} />} />
          <Route path="/planets/:id" element={<Planets id={id} />} />
          <Route path="/species/:id" element={<Species id={id} />} />
          <Route path="/starships/:id" element={<Starships id={id} />} />
          <Route path="/vehicles/:id" element={<Vehicles id={id} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
