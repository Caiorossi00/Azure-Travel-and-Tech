import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Bem vindo ao seu guia turístico digital do município de Jaguarão
        </h1>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZdIZY-BlvrvWGtOpdkNWLJTJGlbBzV8376UkjMu80n58LV9gMITRJQV_f8hb-RX_3Qnypr_PmIK0jpDRacE3PPOeznfPRYuM0gCO-YbTda7J2f72QxdXWdsyPSahW9kxPMUmrL9pxfy51/s1600/RS.png"></img>
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
