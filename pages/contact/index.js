import React, { useState } from 'react';
import ContactHero from './Partials/ContactHero';
import ContactForm from './Partials/ContactForm';
import ContactFaq from './Partials/ContactFaq';
import ContactBanner from './Partials/ContactBanner';
import Head from 'next/head';

const ContactPage = () => {
  const [title, setTitle] = useState('Un Pour Cent - Contact');

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ContactHero />
      <ContactForm />
      <ContactFaq />
      <ContactBanner />
    </>
  );
};

export default ContactPage;
