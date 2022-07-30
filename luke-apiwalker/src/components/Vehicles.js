import axios from "axios";
import { useState, useEffect } from "react";

const Vehicles = (props) => {
  const { id } = props;
  const [vehicleData, setVehicleData] = useState({});

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/vehicles/${id}`)
      .then((response) => {
        console.log(response.data.results);
        console.log(id);
        console.log(response.data);
        setVehicleData(response.data);
      })
      .catch((err) => []);
  }, [id]);

  return (
    <div>
        <h1>{vehicleData.name}</h1>
        <h5>Model: {vehicleData.model}</h5>
        <h5>Vehicle Class: {vehicleData.vehicle_class}</h5>
        <h5>Manufacturer: {vehicleData.manufacturer}</h5>
        <h5>Length: {vehicleData.length}</h5>
        <h5>Crew: {vehicleData.crew}</h5>
        <h5>Passengers: {vehicleData.passengers}</h5>
        <h5>Max Atmosphere Speed: {vehicleData.max_atmosphering_speed}</h5>
        <h5>Cargo Capacity: {vehicleData.cargo_capacity}</h5>
        <h5>Consumables: {vehicleData.consumables}</h5>
        <h5>Cost in credits: {vehicleData.cost_in_credits}</h5>
        <p>*ID's 1-3, 5 have an error</p>
        <footer>39 vehicles in total</footer>
    </div>
  );
};

export default Vehicles;
