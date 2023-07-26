import React from "react";

function Hero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-container">
        <div className="contact-hero-container-left">
          <h1 className="contact-hero-container-left-title black text-38">
            Mentions légales
          </h1>
          <p className="text-16 regular color-white">
            Les CGU définissent et encadrent les modalités de l’utilisation de
            notre site Internet, et déterminent les droits et les obligations
            respectifs de l’utilisateur et de l’éditeur dans le cadre de son
            utilisation.
          </p>
        </div>
        <div className="contact-hero-container-right">
          <img alt="hero" src="./illustrations/hero-contact-1pourcent-2.png" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
