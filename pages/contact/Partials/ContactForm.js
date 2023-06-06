import React from 'react';
import { MaxWidth } from '../../../components/MaxWidth';

const ContactForm = () => {
  return (
    <section className={'contact-form'}>
      <MaxWidth>
        <div className={'contact-form-container'}>
          <div className={'contact-form-container-left'}>
            <img
              src="./illustrations/form-contact-1pourcent-2.png"
              alt="illustration"
            />
          </div>
          <div className={'contact-form-container-right'}>
            <div className="contact-form-container-right-top">
              <h2>Nous contacter</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                duis vitae curabitur amet, fermentum lorem.
              </p>
            </div>
            <div className="contact-form-container-right-bottom">
              <form></form>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ContactForm;
