import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css";

const HomePage = ({ locations }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <Navbar toggleMenu={toggleMenu} />
      <HeroSection />
      <div className={`slide-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          &times;
        </button>
        <h1>Explore Pontos Turísticos</h1>
        <ul>
          {locations.map((location) => (
            <li key={location.id}>
              <Link to={`/location/${location.id}`}>{location.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
