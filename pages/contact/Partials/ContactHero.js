import React from 'react';

const ContactHero = () => {
  return (
    <section className={'contact-hero'}>
      <div className={'contact-hero-container'}>
        <div className={'contact-hero-container-left'}>
          <h1 className={'contact-hero-container-left-title black text-38'}>
            Contact
          </h1>
          <p className={"regular"}>Contact Remplissez le formulaire pour nous contacter</p>
        </div>
        <div className={'contact-hero-container-right'}>
          <img src="./illustrations/hero-contact-1pourcent-2.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
