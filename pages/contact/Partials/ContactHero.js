import React from 'react';
import { MaxWidth } from '../../../components/MaxWidth';

const ContactHero = () => {
  return (
    <section className={'contact-hero'}>
      <MaxWidth>
        <div className={'contact-hero-container'}>
          <div className={'contact-hero-container-left'}>
            <h1 className={'contact-hero-container-left-title black'}>
              Contact
            </h1>
            <p>Contact Remplissez le formulaire pour nous contacter</p>
          </div>
          <div className={'contact-hero-container-right'}>
            <img
              src="./illustrations/hero-contact-1pourcent-2.png"
              alt="hero"
            />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ContactHero;
