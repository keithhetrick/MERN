import axios from "axios";
import { useState, useEffect } from "react";

const People = (props) => {
  const { id } = props;
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        console.log(response.data.results);
        setPeopleData(response.data.results);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
      {peopleData.map((people, i) => (
        <h1 key={i}>{people.name}</h1>
      ))}
    </div>
  );
};

export default People;
