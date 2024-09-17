import React from "react";
import "./Navbar.css";

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="navbar">
      <a
        href="https://www.instagram.com/caiorossi.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="logo">Caiorossi.dev</div>
      </a>{" "}
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
