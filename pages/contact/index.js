import React from 'react';
import ContactHero from './Partials/ContactHero';
import ContactForm from './Partials/ContactForm';
import Head from 'next/head';
import { DonateSection } from '../../components/DonateSection';
import Faq from '../../layouts/Sections/Faq';
const ContactPage = () => {
  const seo = {
    title: 'Un Pour Cent',
    description:
      "Avec Un Pour Cent, soutenez des projets qui font du bien. N'hésitez pas à nous contacter directement via notre site internet.",
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>
      <ContactHero />
      <ContactForm />
      <Faq />
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
