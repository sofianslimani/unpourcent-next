import React from "react";

function HeroAssociation() {
  return (
    <section className="hero-association">
      <img
        className="hero-association__background"
        src="/illustrations/hero-1pourcent-3.png"
      />
      <div className="hero-association__overlay" />
      <div className="hero-association__content">
        <img
          alt="amatullah logo"
          className="hero-association__content__logo"
          src="/logos/amatullah.svg"
        />
        <h1 className="bold">Association Amatullah</h1>
        <p>
          Humanitaire <span>·</span> Depuis 2008 <span>·</span> Association
        </p>
      </div>
    </section>
  );
}

export default HeroAssociation;
