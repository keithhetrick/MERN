import axios from "axios";
import { useState, useEffect } from "react";

const Species = (props) => {
  const { id } = props;
  const [speciesData, setSpeciesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/species/")
      .then((response) => {
        console.log(response.data.results);
        setSpeciesData(response.data.results);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
      {speciesData.map((species, i) => (
        <h1 key={i}>{species.name}</h1>
      ))}
    </div>
  );
};

export default Species;
