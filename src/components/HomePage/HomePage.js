import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection/HeroSection";

const HomePage = ({ locations }) => {
  return (
    <div>
      <HeroSection />
      <h1>Explore Pontos Turísticos</h1>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <Link to={`/location/${location.id}`}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
