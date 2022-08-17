import "./App.css";
import { Routes, Route } from "react-router-dom";
import Authors from "./components/Authors";
import NewAuthor from "./components/NewAuthor";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Authors />} />
        <Route path="/new" element={<NewAuthor />} />
        <Route path="/edit/:id" element={<NewAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
