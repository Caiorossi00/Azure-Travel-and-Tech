import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LocationPage from "./components/LocationPage/LocationPage";
import locationsData from "./data/locations.json";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"; // Se necessário para estilos globais

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <Navbar toggleMenu={toggleMenu} />
      <div className={`slide-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          &times;
        </button>
        <h1>Explore Pontos Turísticos</h1>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          {locationsData.map((location) => (
            <li key={location.id}>
              <Link to={`/location/${location.id}`} onClick={closeMenu}>
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomePage locations={locationsData} />} />
        <Route
          path="/location/:id"
          element={<LocationPage locations={locationsData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
