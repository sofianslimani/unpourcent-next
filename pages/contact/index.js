import React, { useEffect } from 'react';
import ContactHero from './Partials/ContactHero';
import ContactForm from './Partials/ContactForm';
import ContactFaq from './Partials/ContactFaq';
import { DonateSection } from '../../components/DonateSection';

const ContactPage = () => {

  useEffect(() => {
    document.title = "Un Pour Cent - Contact";
  }, []);


  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactFaq />
      <DonateSection
        title={'Découvrez dès maintenant le projet du moment'}
        description={'Découvrez dès maintenant le projet associatif mis en avant ce mois-ci sur notre plateforme. Soyez inspiré par son impact et participez à cette belle aventure de solidarité.'}
        link={'/projet-du-mois'}
        linkText={'Découvrir le projet'}
        isExternal={false}
      />
    </>
  );
};

export default ContactPage;
