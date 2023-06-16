import React from 'react';
import { MaxWidth } from '../../../components/MaxWidth';
import { useFormik } from 'formik';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
              <form onSubmit={formik.handleSubmit}>
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
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
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
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
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
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required
                  />
                </div>

                <div className="contact-form-container-right-bottom-input">
                  <label className={'bold'} htmlFor="phone">
                    Téléphone <span className="red">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    placeholder="06 12 34 56 78"
                    type="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    required
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
                    onChange={formik.handleChange}
                    value={formik.values.message}
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
