import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bem vindo ao seu guia turístico digital</h1>
        <img src="https://www.xola.com/wp-content/uploads/2022/12/ezgif.com-gif-maker-1-1.webp"></img>
        <p>
          Descubra as maravilhas ao seu redor com nosso guia interativo. Se você
          deseja explorar o melhor que a cidade tem a oferecer, você está no
          lugar certo.
        </p>
        <button className="explore-btn">Explore</button>
      </div>
    </section>
  );
};

export default HeroSection;
