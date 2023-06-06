import React from 'react';
import { MaxWidth } from '../MaxWidth';

export const HeroAssociation = () => {
  return (
    <section className="hero-association">
      <MaxWidth>
        <img
          src="/illustrations/hero-1pourcent-3.png"
          className="hero-association__background"
        />
        <div className="hero-association__overlay" />
        <div className="hero-association__content">
          <img
            className="hero-association__content__logo"
            src="/logos/amatullah.svg"
            alt="amatullah logo"
          />
          <h1>Association Amatullah</h1>
          <p>
            Humanitaire <span>·</span> Depuis 2008 <span>·</span> Association
          </p>
        </div>
      </MaxWidth>
    </section>
  );
};
