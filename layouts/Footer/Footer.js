import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import Airtable from "airtable";
import dotenv from "dotenv";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
dotenv.config();

const ICONS = {
  plane: (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3497 11.5L6.9543 9.21477L5.58509 10.3628L5.02898 7.91888L10.9587 2.72567L3.84882 6.80974L0.5 4.39355L13.5 0.5L10.3497 11.5Z"
        fill="#252525"
      />
    </svg>
  ),
};

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const Footer = () => {
  const newsletterForm = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Format d'email invalide")
        .required("L'email est requis"),
    }),
    onSubmit: (values) => {
      base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME_NEWSLETTER).create(
        [
          {
            fields: {
              email: values.email,
            },
          },
        ],
        function (err, records) {
          if (err) {
            toast.error("❌ Une erreur est survenue lors de votre inscription");
            return;
          } else {
            toast.success("👍 Votre inscription à bien été pris en compte");
          }
          console.log(records);
        },
      );
    },
  });
  return (
    <footer className={"footer container-s"}>
      <aside className={"footer-container"}>
        <div className={"footer-container-logo"}>
          <img src="/logos/logo.svg" alt="logo" />
        </div>
        <div className={"footer-container-plan-du-site"}>
          <h4 className={"text-16 color-black medium"}>Plan du site</h4>
          <ul>
            <li>
              <Link href="/prohet-du-mois">Le projet du mois</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={"footer-container-pages-legales"}>
          <h4 className={"text-16 color-black medium"}>Pages légales</h4>
          <ul>
            <li>Mentions légales</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        <div className={"footer-container-social"}>
          <h4 className={"text-16 color-black medium"}>Réseaux</h4>
          <ul>
            <li>
              <Link href="https://www.instagram.com/unpourcent_/">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
        <div className={"footer-container-newsletter"}>
          <h4 className={"text-16 color-black medium"}>Newsletter</h4>
          <form onSubmit={newsletterForm.handleSubmit}>
            <label>
              <input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={newsletterForm.handleChange}
                value={newsletterForm.values.email}
              />
              <button type="submit">{ICONS.plane}</button>
            </label>
          </form>
          {newsletterForm.touched.email && newsletterForm.errors.email && (
            <p className="error-message text-16 regular color-red">
              {newsletterForm.errors.email}
            </p>
          )}
          <p>Rejoignez notre newsletter pour tout savoir sur Un Pour Cent</p>
        </div>
      </aside>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
