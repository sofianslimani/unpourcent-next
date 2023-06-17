import React from 'react';
import { MaxWidth } from '../MaxWidth';

export const SocialSection = () => {
  return (
    <section className="social-section">
      <MaxWidth>
        <h2>
          Suivez <span>Amatullah</span> sur les réseaux sociaux !
        </h2>
        <div className="socials__cards">
          <a
            href="https://twitter.com/amatullah_fr?lang=fr"
            className="socials__card socials__card--twitter"
          >
            <img src="/socials/twitter.svg" alt="twitter" /> <h3>Twitter</h3>
          </a>
          <a
            href="https://www.facebook.com/ASSOCIATION.AMATULLAH/?locale=fr_FR"
            className="socials__card socials__card--facebook"
          >
            <img src="/socials/facebook.svg" alt="facebook" /> <h3>Facebook</h3>
          </a>
          <a
            href="https://www.instagram.com/association_amatullah/?hl=fr"
            className="socials__card socials__card--instagram"
          >
            <img src="/socials/instagram.svg" alt="instagram" />
            <h3>Instagram</h3>
          </a>
          <a
            href="https://www.linkedin.com/company/amatullah-au-service-de-l-humanité/"
            className="socials__card socials__card--linkedin"
          >
            <img src="/socials/linkedin.svg" alt="linkedin" /> <h3>Linkedin</h3>
          </a>
        </div>
      </MaxWidth>
    </section>
  );
};
