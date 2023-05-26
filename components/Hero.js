import React from 'react';

const Hero = () => {
  return (
    <section className={'hero'}>
      <div className={'hero-container'}>
        <div className={'hero-container-left'}>
          <h1 className={'hero-container-left-title black'}>
            Avec un pour cent, soutenez des projets humanitaires jusqu'à leurs
            réalisations
          </h1>
          <p>
            Cette semaine, le projet que un pour cent soutient est celui de
            l'association Amatullah. Cette association a pour objectif durant le
            prochain mois de réalisé des maraudes humanitaires dans les rues de
            Paris et de distribuer des paniers repas aux plus nécessitants.
          </p>

          <div className={'hero-container-left-button'}>
            <button className={'hero-container-left-button-donate'}>
              Découvrir le projet du moment
            </button>
          </div>
        </div>
        <div className={'hero-container-right'}>
          <img src="./illustrations/hero-1pourcent-2.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
