import React, {useEffect} from 'react';
import ContactHero from './Partials/ContactHero';
import ContactForm from './Partials/ContactForm';
import ContactFaq from './Partials/ContactFaq';
import ContactBanner from './Partials/ContactBanner';
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
      <ContactBanner />
    </>
  );
};

export default ContactPage;
