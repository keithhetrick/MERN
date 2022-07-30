import axios from "axios";
import { useState, useEffect } from "react";

const Species = (props) => {
  const { id } = props;
  const [speciesData, setSpeciesData] = useState({});

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/species/${id}`)
      .then((response) => {
        console.log(response.data.results);
        console.log(id);
        console.log(response.data);
        setSpeciesData(response.data);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
      <h1>{speciesData.name}</h1>
      <h5>Average Height: {speciesData.average_height} cm</h5>
      <h5>Average Lifespan: {speciesData.average_lifespan} yrs</h5>
      <h5>Classification: {speciesData.classification}</h5>
      <h5>Designation: {speciesData.designation}</h5>
      <h5>Eye Colors: {speciesData.eye_colors}</h5>
      <h5>Hair Colors: {speciesData.hair_colors}</h5>
      <h5>Language: {speciesData.language}</h5>
      <h5>Skin Colors: {speciesData.skin_colors}</h5>
      <footer>37 species in total</footer>
    </div>
  );
};

export default Species;
