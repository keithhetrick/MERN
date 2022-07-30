import axios from "axios";
import { useState, useEffect } from "react";

const Planets = (props) => {
  const { id } = props;
  const [planetData, setPlanetData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/")
      .then((response) => {
        console.log(response.data.results);
        setPlanetData(response.data.results);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
      {planetData.map((planet, i) => (
        <h1 key={i}>{planet.name}</h1>
      ))}
    </div>
  );
};

export default Planets;
