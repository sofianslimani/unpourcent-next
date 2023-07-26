import React from "react";
import { useFormik } from "formik";
import Airtable from "airtable";
import dotenv from "dotenv";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import Image from "next/image";

dotenv.config();

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

function ContactForm() {
  const contactForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Le prénom est requis"),
      lastName: Yup.string().required("Le nom est requis"),
      email: Yup.string()
        .email("Format d'email invalide")
        .required("L'email est requis"),
      phone: Yup.string().optional(),
      message: Yup.string().required("Le message est requis"),
    }),
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
            toast.error(
              "❌ Une erreur est survenue lors de l'envoi de votre message.",
            );
            return;
          }
          toast.success("👍Votre message a été envoyé avec succès.");

          console.log(records);
        },
      );
    },
  });
  return (
    <section className="contact-form container-l">
      <div className="contact-form-container">
        <div className="contact-form-container-left">
          <Image
            fill={true}
            alt="illustration"
            src="/illustrations/form-contact-1pourcent-2.png"
          />
        </div>
        <div className="contact-form-container-right">
          <div className="contact-form-container-right-bottom">
            <form onSubmit={contactForm.handleSubmit}>
              <div className="contact-form-container-right-bottom-inputs">
                <div className="contact-form-container-right-bottom-inputs-input">
                  <label className="bold" htmlFor="firstName">
                    Prénom <span className="red">*</span>
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    onChange={contactForm.handleChange}
                    placeholder="Prénom"
                    type="text"
                    value={contactForm.values.firstName}
                  />
                  {contactForm.touched.firstName &&
                  contactForm.errors.firstName ? (
                    <p className="error-message text-16 regular color-red">
                      {contactForm.errors.firstName}
                    </p>
                  ) : null}
                </div>
                <div className="contact-form-container-right-bottom-inputs-input">
                  <label className="bold" htmlFor="lastName">
                    Nom <span className="red">*</span>
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    onChange={contactForm.handleChange}
                    placeholder="Nom"
                    type="text"
                    value={contactForm.values.lastName}
                  />
                  {contactForm.touched.lastName &&
                  contactForm.errors.lastName ? (
                    <p className="error-message text-16 regular color-red">
                      {contactForm.errors.lastName}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="contact-form-container-right-bottom-input">
                <label className="bold" htmlFor="email">
                  E-mail <span className="red">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  onChange={contactForm.handleChange}
                  placeholder="votremail@gmail.com"
                  type="email"
                  value={contactForm.values.email}
                />
                {contactForm.touched.email && contactForm.errors.email ? (
                  <p className="error-message text-16 regular color-red">
                    {contactForm.errors.email}
                  </p>
                ) : null}
              </div>

              <div className="contact-form-container-right-bottom-input">
                <label className="bold" htmlFor="phone">
                  Téléphone
                </label>

                <input
                  id="phone"
                  name="phone"
                  onChange={contactForm.handleChange}
                  placeholder="06 12 34 56 78"
                  type="phone"
                  value={contactForm.values.phone}
                />
                {contactForm.touched.phone && contactForm.errors.phone ? (
                  <p className="error-message text-16 regular color-red">
                    {contactForm.errors.phone}
                  </p>
                ) : null}
              </div>
              <div className="contact-form-container-right-bottom-input">
                <label className="bold" htmlFor="message">
                  Message <span className="red">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  onChange={contactForm.handleChange}
                  placeholder="Votre message"
                  type="text"
                  value={contactForm.values.message}
                />
                {contactForm.touched.message && contactForm.errors.message ? (
                  <p className="error-message text-16 regular color-red">
                    {contactForm.errors.message}
                  </p>
                ) : null}
              </div>

              <button className="button-primary" type="submit">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default ContactForm;
