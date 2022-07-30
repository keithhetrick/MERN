import axios from "axios";
import { useState, useEffect } from "react";

const Starships = (props) => {
  const { id } = props;
  const [starshipData, setStarshipData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/")
      .then((response) => {
        console.log(response.data.results);
        setStarshipData(response.data.results);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
      {starshipData.map((starship, i) => (
        <h1 key={i}>{starship.name}</h1>
      ))}
    </div>
  );
};

export default Starships;
