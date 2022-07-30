import axios from "axios";
import { useState, useEffect } from "react";

const Vehicles = (props) => {
  const { id } = props
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/vehicles/')
      .then((response) => {
        console.log(response.data.results);
        setVehicleData(response.data.results);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
      {vehicleData.map((vehicle)=>
        <h1>{vehicle.name}</h1>
      )}
    </div>
  );
};

export default Vehicles
