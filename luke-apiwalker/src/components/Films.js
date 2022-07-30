import axios from "axios";
import { useState, useEffect } from "react";

const Films = (props) => {
  const { id } = props;
  const [filmData, setFilmData] = useState({});

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/films/${id}`)
      .then((response) => {
        console.log(response.data.results);
        console.log(id);
        console.log(response.data);
        setFilmData(response.data);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
      <h1>{filmData.title}</h1>
      <h5>Episode: {filmData.episode_id}</h5>
      <h3>Director: {filmData.director}</h3>
      <h6>Opening scene: {filmData.opening_crawl}</h6>
      <p>Producer: {filmData.producer}</p>
      <p>Release Date: {filmData.release_date}</p>
      <footer>6 films in total</footer>
    </div>
  );
};

export default Films;
