import React from 'react';
import { useFormik } from 'formik';
import Airtable from 'airtable';
import dotenv from 'dotenv';
dotenv.config();

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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3497 11.5L6.9543 9.21477L5.58509 10.3628L5.02898 7.91888L10.9587 2.72567L3.84882 6.80974L0.5 4.39355L13.5 0.5L10.3497 11.5Z"
        fill="#252525"
      />
    </svg>
  ),
};

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const Footer = () => {
  const newsletterForm = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME_NEWSLETTER).create(
        [
          {
            fields: {
              email: values.email,
            },
          },
        ],
        function (err, records) {
          if (err) {
            console.error(err);
            return;
          }
          console.log(records);
        }
      );
    },
  });
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
          <form onSubmit={newsletterForm.handleSubmit}>
            <label>
              <input
                id="email"
                name="email"
                placeholder="email"
                type="email"
                onChange={newsletterForm.handleChange}
                value={newsletterForm.values.email}
                required
              />
              <button type="submit">{ICONS.plane}</button>
            </label>
          </form>
          <p>Join our newsletter to stay up to date on features and releases</p>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
