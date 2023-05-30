import React from 'react';

const HomeHero = () => {
  return (
    <section className={'home-hero'}>
      <div className={'home-hero-container'}>
        <div className={'home-hero-container-left'}>
          <h1 className={'home-hero-container-left-title black'}>
            Avec un pour cent, soutenez des projets humanitaires jusqu'à leurs
            réalisations
          </h1>
          <p>
            Cette semaine, le projet que un pour cent soutient est celui de
            l'association Amatullah. Cette association a pour objectif durant le
            prochain mois de réalisé des maraudes humanitaires dans les rues de
            Paris et de distribuer des paniers repas aux plus nécessitants.
          </p>

          <div className={'home-hero-container-left-button'}>
            <button className={'home-hero-container-left-button-donate'}>
              Découvrir le projet du moment
            </button>
          </div>
        </div>
        <div className={'home-hero-container-right'}>
          <img src="./illustrations/hero-1pourcent-2.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
