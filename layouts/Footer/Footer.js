import React from 'react';

const ICONS = {
  plane: (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3497 11.5L6.9543 9.21477L5.58509 10.3628L5.02898 7.91888L10.9587 2.72567L3.84882 6.80974L0.5 4.39355L13.5 0.5L10.3497 11.5Z"
        fill="#252525"
      />
    </svg>
  ),
};

const Footer = () => {
  return (
    <footer className={'footer container-s'}>
      <aside className={'footer-container'}>
        <div className={'footer-container-logo'}>
          <img src="/logos/logo.svg" alt="logo" />
        </div>
        <div className={'footer-container-plan-du-site'}>
          <h4 className={'text-16 color-black medium'}>Plan du site</h4>
          <ul>
            <li>Le projet du mois</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={'footer-container-pages-legales'}>
          <h4 className={'text-16 color-black medium'}>Pages légales</h4>
          <ul>
            <li>Mentions légales</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        <div className={'footer-container-social'}>
          <h4 className={'text-16 color-black medium'}>Réseaux</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/association_amatullah/?hl=fr">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/amatullah_fr?lang=fr">Twitter</a>
            </li>
            <li>
              <a href="https://www.facebook.com/ASSOCIATION.AMATULLAH/?locale=fr_FR">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/amatullah-au-service-de-l-humanité/">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className={'footer-container-newsletter'}>
          <h4 className={'text-16 color-black medium'}>Newsletter</h4>
          <label>
            <input type="text" placeholder="Email" />
            {ICONS.plane}
          </label>
          <p>Join our newsletter to stay up to date on features and releases</p>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
