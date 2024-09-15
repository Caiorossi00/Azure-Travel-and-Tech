import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Bem vindo ao seu guia turístico digital do município de Jaguarão
        </h1>
        <img src="https://www.xola.com/wp-content/uploads/2022/12/ezgif.com-gif-maker-1-1.webp"></img>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover on the edge of it. Well sit back,
          relax because we’ll give you a truly out of this world experience!
          Explore.
        </p>
        <button className="explore-btn">Explore</button>
      </div>
    </section>
  );
};

export default HeroSection;
