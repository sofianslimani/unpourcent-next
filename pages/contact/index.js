import React, { useState } from 'react';
import ContactHero from './Partials/ContactHero';
import ContactForm from './Partials/ContactForm';
import ContactFaq from './Partials/ContactFaq';
import Head from 'next/head';

const ContactPage = () => {
  const [seo, setSeo] = useState({
    title: 'Un Pour Cent - Contact',
    description:
      "Avec Un Pour Cent, soutenez des projets qui font du bien. Chaques mois, découvrez et soutenez un nouveau projet et recevez des nouvelles de l'avancement du projet.",
  });

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>
      <ContactHero />
      <ContactForm />
      <ContactFaq />
      <DonateSection
        title={'Découvrez dès maintenant le projet du moment'}
        description={
          'Découvrez dès maintenant le projet associatif mis en avant ce mois-ci sur notre plateforme. Soyez inspiré par son impact et participez à cette belle aventure de solidarité.'
        }
        link={'/projet-du-mois'}
        linkText={'Découvrir le projet'}
        isExternal={false}
      />
    </>
  );
};

export default ContactPage;
