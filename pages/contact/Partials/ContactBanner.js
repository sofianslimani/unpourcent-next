import Link from 'next/link';
import React from 'react';
import { MaxWidth } from '../../../components/MaxWidth';

const ContactBanner = () => {
  return (
    <section className={'contact-banner'}>
      <MaxWidth>
        <div className={'contact-banner-container'}>
          <h2 className={'bold'}>
            Découvrez dès maintenant le projet du moment
          </h2>
          <p className={'regular'}>
            Soutenez ce projet en réalisant un don dès aujourd'hui et recevez
            des nouvelles de l'avancement de ce projet jusqu'à sa réalisation.
          </p>

          <div className={'contact-banner-container-cta'}>
            <Link
              href={'/association'}
              className={'button-classic button-classic-white'}
            >
              Découvrir le projet du moment
            </Link>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ContactBanner;
