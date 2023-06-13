import React from 'react';
import ContactHero from './Partials/ContactHero';
import ContactForm from './Partials/ContactForm';
import ContactFaq from './Partials/ContactFaq';
import ContactBanner from './Partials/ContactBanner';

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactFaq />
      <ContactBanner />
    </>
  );
};

export default ContactPage;
