import React from "react";

const ContactHero = () => {
  return (
    <section className={"contact-hero"}>
      <div className={"contact-hero-container"}>
        <div className={"contact-hero-container-left"}>
          <h1 className={"contact-hero-container-left-title black text-38"}>
            Nous contacter
          </h1>
          <p className="text-16 regular color-white">
            Bonjour à toutes les associations et donateurs engagés ! Vous êtes
            sur la page de contact d'Un Pour Cent, un espace où les cœurs
            généreux se rencontrent. Que vous soyez une association passionnée
            ou un donateur prêt à faire une différence, nous sommes là pour
            vous.
          </p>
        </div>
        <div className={"contact-hero-container-right"}>
          <img src="./illustrations/hero-contact-1pourcent-2.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
