import React from "react";
import Head from "next/head";
import { DonateSection } from "../../components/DonateSection";
import Faq from "../../layouts/Sections/Faq";
import ContactForm from "./Partials/ContactForm";
import ContactHero from "./Partials/ContactHero";

function ContactPage() {
  const seo = {
    title: "Un Pour Cent",
    description:
      "Avec Un Pour Cent, soutenez des projets qui font du bien. N'hésitez pas à nous contacter directement via notre site internet.",
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta content={seo.description} name="description" />
      </Head>
      <ContactHero />
      <ContactForm />
      <Faq />
      <DonateSection
        description="Découvrez dès maintenant le projet associatif mis en avant ce mois-ci sur notre plateforme. Soyez inspiré par son impact et participez à cette belle aventure de solidarité."
        isExternal={false}
        link="/projet-du-mois"
        linkText="Découvrir le projet"
        title="Découvrez dès maintenant le projet du moment"
      />
    </>
  );
}

export default ContactPage;
