import axios from "axios";
import { useState, useEffect } from "react";

const Films = (props) => {
  const { id } = props;
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/films/')
      .then((response) => {
        console.log(response.data.results);
        setFilmData(response.data.results);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
      {filmData.map((film, i) => (
        <h1 key={i}>{film.title}</h1>
      ))}
    </div>
  );
};

export default Films;
