import axios from "axios";
import { useState, useEffect } from "react";

const Planets = (props) => {
  const { id } = props;
  const [planetData, setPlanetData] = useState({});

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((response) => {
        console.log(response.data.results);
        console.log(id);
        console.log(response.data);
        setPlanetData(response.data);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
      <h1>{planetData.name}</h1>
      <h5>Rotation Period: {planetData.rotation_period}</h5>
      <h5>Obital Period: {planetData.oribital_period}</h5>
      <h5>Diameter: {planetData.diameter}</h5>
      <h5>Climate: {planetData.climate}</h5>
      <h5>Gravity: {planetData.gravity}</h5>
      <h5>Population: {planetData.population}</h5>
      <h5>Surface water: {planetData.surface_water}</h5>
      <h5>Terrain: {planetData.terrain}</h5>
      <footer>*60 planets in total</footer>
    </div>
  );
};

export default Planets;
