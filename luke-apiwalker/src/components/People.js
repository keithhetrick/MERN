import axios from "axios";
import { useState, useEffect } from "react";

const People = (props) => {
  const { id } = props;
  const [peopleData, setPeopleData] = useState({});

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        console.log(response.data.results);
        console.log(id);
        console.log(response.data);
        setPeopleData(response.data);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
      <h1>{peopleData.name}</h1>
      <h5>Height :{peopleData.height}</h5>
      <h5>Gender: {peopleData.gender}</h5>
      <h5>Hair Color: {peopleData.hair_color}</h5>
      <h5>Eye Color: {peopleData.eye_color}</h5>
      <h5>Skin Color: {peopleData.skin_color}</h5>
      <h5>Mass: {peopleData.mass} cm</h5>
      <h5>Birth Year: {peopleData.birth_year}</h5>
      <p>*ID 17 has an error</p>
      <footer>82 people in total</footer>
    </div>
  );
};

export default People;
