import axios from "axios";
import { useState, useEffect } from "react";

const Starships = (props) => {
  const { id } = props;
  const [starshipData, setStarshipData] = useState({});

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((response) => {
        console.log(response.data.results);
        console.log(id);
        console.log(response.data);
        setStarshipData(response.data);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
      <h1>{starshipData.name}</h1>
      <h5>Model: {starshipData.model}</h5>
      <h5>Starship Class: {starshipData.starship_class}</h5>
      <h5>Manufacturer: {starshipData.manufacturer}</h5>
      <h5>Length: {starshipData.length}</h5>
      <h5>Crew: {starshipData.crew}</h5>
      <h5>Passengers: {starshipData.passengers}</h5>
      <h5>Hyperdrive rating: {starshipData.hyperdrive_rating}</h5>
      <h5>Max Atmosphere Speed: {starshipData.max_atmosphering_speed}</h5>
      <h5>MGLT per hour (Maximum number of Megalights): {starshipData.MGLT}</h5>
      <h5>Consumables: {starshipData.consumables}</h5>
      <h5>Cost in credits: {starshipData.cost_in_credits}</h5>
      <p></p>
      <p>*ID's 1,6-8, 14, 16, 18-20, 24-25, 30, 33-38, 42, 44-46, 50, 51, 53-57, 60, 62, 67, 69-73 have an error</p>
      <footer>36 starships in total</footer>
    </div>
  );
};

export default Starships;
