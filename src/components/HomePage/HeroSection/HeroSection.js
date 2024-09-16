import React from "react";
import { useNavigate } from "react-router-dom";
import locationsData from "../../../data/locations.json";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    const routes = locationsData.map((location) => `/location/${location.id}`);
    const randomRoute = routes[Math.floor(Math.random() * routes.length)];
    navigate(randomRoute);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Descubra a magia de cada canto do planeta, com um clique.</h1>
        <img
          src="https://www.xola.com/wp-content/uploads/2022/12/ezgif.com-gif-maker-1-1.webp"
          alt="Imagem mostrando destinos turísticos"
        />
        <p>
          O mundo inteiro nas suas mãos. Conheça mais sobre destinos icônicos ao
          redor do mundo sem sair da sua casa.
        </p>
        <button
          className="explore-btn"
          type="button"
          onClick={handleExploreClick}
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
