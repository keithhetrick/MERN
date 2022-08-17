import "./App.css";
import { Routes, Route } from "react-router-dom";
import Authors from "./components/Authors";
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Routes>
        <Route path="/" element={<Authors />} />
        <Route path="/new" element={<NewAuthor />} />
        <Route path="/edit/:id" element={<EditAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
