import React from 'react';
import { MaxWidth } from '../../../components/MaxWidth';
import { useFormik } from 'formik';
import Airtable from 'airtable';
import dotenv from 'dotenv';
dotenv.config();

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const ContactForm = () => {
  const contactForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: (values) => {
      base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME_CONTACT).create(
        [
          {
            fields: {
              Firstname: values.firstName,
              Lastname: values.lastName,
              Email: values.email,
              Phone: values.phone,
              Message: values.message,
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
              <h2 className={'bold'}>Nous contacter</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                duis vitae curabitur amet, fermentum lorem.
              </p>
            </div>
            <div className="contact-form-container-right-bottom">
              <form onSubmit={contactForm.handleSubmit}>
                <div className="contact-form-container-right-bottom-inputs">
                  <div className="contact-form-container-right-bottom-inputs-input">
                    <label className={'bold'} htmlFor="firstName">
                      Prénom <span className="red">*</span>
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      placeholder="Prénom"
                      type="text"
                      onChange={contactForm.handleChange}
                      value={contactForm.values.firstName}
                      required
                    />
                  </div>
                  <div className="contact-form-container-right-bottom-inputs-input">
                    <label className={'bold'} htmlFor="lastName">
                      Nom <span className="red">*</span>
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      placeholder="Nom"
                      type="text"
                      onChange={contactForm.handleChange}
                      value={contactForm.values.lastName}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-container-right-bottom-input">
                  <label className={'bold'} htmlFor="email">
                    E-mail <span className="red">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    placeholder="votremail@gmail.com"
                    type="email"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.email}
                    required
                  />
                </div>

                <div className="contact-form-container-right-bottom-input">
                  <label className={'bold'} htmlFor="phone">
                    Téléphone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    placeholder="06 12 34 56 78"
                    type="phone"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.phone}
                  />
                </div>

                <div className="contact-form-container-right-bottom-input">
                  <label className={'bold'} htmlFor="message">
                    Message <span className="red">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    type="text"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.message}
                    required
                  />
                </div>

                <button type="submit" className={'button-primary'}>
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ContactForm;
