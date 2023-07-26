import Link from "next/link";
import React from "react";
import Image from "next/image";

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-container">
        <div className="home-hero-container-left">
          <h1 className="home-hero-container-left-title color-white black text-38">
            Avec un pour cent, soutenez des projets humanitaires jusqu&apos;à
            leurs réalisations
          </h1>
          <p className="text-16 regular color-white">
            Bienvenue sur Un Pour Cent, la plateforme qui met en avant chaque
            mois un projet associatif inspirant. Rejoignez-nous pour faire une
            réelle différence dans la vie des autres. Ensemble, créons un monde
            plus solidaire, un pour cent à la fois.
          </p>

          <div className="home-hero-container-left-button">
            <Link
              className="button-classic button-classic-white home-hero-container-left-button-donate"
              href="/projet-du-mois"
            >
              Découvrir le projet du moment
            </Link>
          </div>
        </div>
        <div className="home-hero-container-right">
          <Image
            fill={true}
            alt="hero"
            src="./illustrations/hero-1pourcent.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
