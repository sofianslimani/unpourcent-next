import React from "react";
import Head from "next/head";
import Link from "next/link";
import Hero from "./Partials/Hero";
import ItemLegales from "./Partials/ItemLegales";

function LegalePage() {
  const seo = {
    title: "Un Pour Cent - Mentions légales",
    description:
      "Avec Un Pour Cent, soutenez des projets qui font du bien. Chaques mois, découvrez et soutenez un nouveau projet et recevez des nouvelles de l'avancement du projet.",
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta content={seo.description} name="description" />
      </Head>
      <section className="legale-page">
        <Hero />
        <aside className="legale-page-container container-s">
          <ItemLegales
            description={
              "Acceptation des conditions d'utilisation L'utilisation du site internet Un pour cent (ci-après dénommé \"le site\") implique votre acceptation pleine et entière des présentes conditions d'utilisation. Veuillez les lire attentivement avant d'utiliser le site."
            }
            title={"Acceptation des conditions d'utilisation"}
          />
          <ItemLegales
            description={
              "Utilisation du site Le site Un pour cent a pour but de proposer des activités à faire à Paris à travers des articles de blog et une page d'activités. Vous acceptez de ne pas utiliser le site à des fins illégales ou dans un but contraire aux présentes conditions d'utilisation"
            }
            title="Utilisation du site"
          />
          <ItemLegales
            description="Propriété intellectuelle Tous les contenus présents sur le site, y compris les articles, les images et les éléments graphiques, sont la propriété de Un pour cent et sont protégés par les lois sur la propriété intellectuelle. Toute reproduction, distribution ou utilisation non autorisée de ces contenus est strictement interdite."
            title="Propriété intellectuelle"
          />

          <ItemLegales
            description={
              "Inscription des utilisateurs Le site Un pour cent ne nécessite pas d'inscription des utilisateurs. Aucune information personnelle n'est collectée lors de l'utilisation du site."
            }
            title="Inscription des utilisateurs"
          />

          <ItemLegales
            description={
              "Responsabilité des utilisateurs Les utilisateurs du site sont responsables de leurs actions et du contenu qu'ils publient. Vous acceptez de ne pas publier de contenu diffamatoire, offensant, illégal ou contraire à l'éthique. Un pour cent se réserve le droit de supprimer tout contenu inapproprié sans préavis."
            }
            title="Responsabilité des utilisateurs"
          />

          <ItemLegales
            description={
              "Liens externes Le site peut contenir des liens vers des sites externes. Ces liens sont fournis à titre informatif uniquement et Un pour cent n'assume aucune responsabilité quant au contenu de ces sites externes"
            }
            title={"Liens externes\n"}
          />

          <ItemLegales
            description={
              "Limitation de responsabilité Un pour cent met tout en œuvre pour fournir des informations exactes et à jour. Cependant, nous ne garantissons pas l'exactitude, l'exhaustivité ou la fiabilité des informations fournies sur le site. Vous utilisez le site à vos propres risques."
            }
            title={"Limitation de responsabilité\n"}
          />

          <div className="legale-page-container-item">
            <div className="legale-page-container-item-title">
              <h3 className="color-primary text-30 medium">Contact</h3>
            </div>
            <div className="legale-page-container-item-description">
              <p className="text-16 regular color-black">
                Contact Pour toute question ou préoccupation concernant les
                conditions d&apos;utilisation, vous pouvez nous contacter via
                notre page de contact disponible à l&apos;adresse suivante :{" "}
                <Link className="color-primary" href="/contact">
                  https://un-pour-cent.org/contact/
                </Link>
              </p>
              <p className="text-16 regular color-black">
                En utilisant le site Un pour cent, vous acceptez les présentes
                conditions d&apos;utilisation. Un pour cent se réserve le droit
                de modifier ces conditions à tout moment. Il est de votre
                responsabilité de consulter régulièrement les conditions
                d&apos;utilisation pour prendre connaissance des éventuelles
                mises à jour.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

export default LegalePage;
