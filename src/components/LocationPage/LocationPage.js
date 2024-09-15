import React from "react";
import { useParams } from "react-router-dom";
import "./LocationPage.css";

const LocationPage = ({ locations }) => {
  const { id } = useParams();
  const location = locations.find((loc) => loc.id === id);

  if (!location) {
    return <h1>Local não encontrado</h1>;
  }

  return (
    <div className="container-location">
      <img src={location.image} alt={location.name} />
      <h1>{location.name}</h1>
      <p>{location.description}</p>
    </div>
  );
};

export default LocationPage;
