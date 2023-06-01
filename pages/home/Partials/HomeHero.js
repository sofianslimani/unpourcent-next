import React from 'react';

const HomeHero = () => {
  return (
    <section className={'home-hero'}>
      <div className={'home-hero-container'}>
        <div className={'home-hero-container-left'}>
          <h1 className={'home-hero-container-left-title color-white black text-38'}>
            Avec un pour cent, soutenez des projets humanitaires jusqu'à leurs
            réalisations
          </h1>
          <p className={"text-16 color-white"}>
            Cette semaine, le projet que un pour cent soutient est celui de
            l'association Amatullah. Cette association a pour objectif durant le
            prochain mois de réalisé des maraudes humanitaires dans les rues de
            Paris et de distribuer des paniers repas aux plus nécessitants.
          </p>

          <div className={'home-hero-container-left-button'}>
            <a href={"#"} className={'button-classic button-classic-white home-hero-container-left-button-donate'}>
              Découvrir le projet du moment
            </a>
          </div>
        </div>
        <div className={'home-hero-container-right'}>
          <img src="./illustrations/hero-1pourcent.svg" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
