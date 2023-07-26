import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import SectionThreeKpis from "../../layouts/Sections/SectionThreeKpis";
import SectionImagesAndText from "../../layouts/Sections/SectionImagesAndText";
import { DonateSection } from "../../components/DonateSection";
import Faq from "../../layouts/Sections/Faq";
import HomeThreeCardsInformations from "./Partials/HomeThreeCardsInformations";
import HomeHero from "./Partials/HomeHero";

function HomePage() {
  const seo = {
    title: "Un Pour Cent",
    description:
      "Avec Un Pour Cent, soutenez des projets qui font du bien. Chaques mois, découvrez et soutenez un nouveau projet et recevez des nouvelles de l'avancement du projet.",
  };

  const [dataSectionGrid, setDataSectionGrid] = useState({});

  useEffect(() => {
    setDataSectionGrid({
      cta: (
        <Link className="button-secondary" href="/projet-du-mois">
          Découvrir le projet
        </Link>
      ),
      isGrid: true,
      title: (
        <h2 className="text-30 color-black bold">
          L’association du moment <span className="red">Amatullah</span>
        </h2>
      ),
      text: "Amatullah, fondée par une jeune femme en quête de justice et d'égalité sociale, est une association humanitaire engagée depuis 2006 pour soutenir les plus démunis en France et à l'international. Depuis sa création, Amatullah s'engage à fournir une assistance aux personnes en situation précaire en offrant des repas, des colis alimentaires aux familles et une présence réconfortante aux personnes touchées par la solitude. Aujourd'hui, l'association étend ses actions à travers le monde grâce à des projets humanitaires visant à combattre la précarité, les injustices et les inégalités.",
      images: [
        "images/amatullah/amatullah-1.png",
        "images/amatullah/amatullah-2.png",
        "images/amatullah/amatullah-3.png",
      ],
    });
  }, [dataSectionGrid]);

  const [dataSectionClassic, setDataSectionClassic] = useState({});

  useEffect(() => {
    setDataSectionClassic({
      isGrid: false,
      title: (
        <h2 className="text-30 color-black bold">
          Comment <span className="red">Un Pour Cent</span> utilise votre{" "}
          <span className="green"> donation</span> ?{" "}
        </h2>
      ),
      text: "Chaque don effectué à Un Pour Cent est intégralement utilisé pour financer le projet mis en avant. Votre contribution a un impact direct et significatif dans la réalisation des objectifs du projet sélectionné. Votre soutien fait une réelle différence dans la vie des personnes qui ont besoin d'aide. Votre confiance est précieuse pour nous, et nous nous engageons à gérer vos dons de manière responsable et efficiente. Merci de votre précieux soutien !",
      images: ["images/joel-muniz-A4Ax1ApccfA-unsplash 2.png"],
    });
  }, [setDataSectionClassic]);

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta content={seo.description} name="description" />

        <meta
          content="Un Pour Cent - Soutenez des projets qui font du bien"
          data-n-head="ssr"
          property="og:title"
        />

        <meta
          content="/seo/og-image.png"
          data-n-head="ssr"
          property="og:image"
        />

        <meta
          content="https://un-pour-cent.org/"
          data-n-head="ssr"
          property="og:url"
        />

        <meta
          content="https://un-pour-cent.org/"
          data-n-head="ssr"
          property="og:site"
        />

        <meta
          content="Un Pour Cent - Soutenez des projets qui font du bien"
          data-n-head="ssr"
          property="og:site_name"
        />

        <meta
          content="Avec Un Pour Cent, soutenez des projets qui font du bien. Chaques mois, découvrez et soutenez un nouveau projet et recevez des nouvelles de l'avancement du projet."
          data-n-head="ssr"
          property="og:description"
        />
      </Head>
      <HomeHero />
      <SectionThreeKpis color="green" />
      <HomeThreeCardsInformations />
      <SectionImagesAndText
        customClasses="section-how-un-pour-cent-use-donation"
        data={dataSectionClassic}
        greyBackground
        inverse
      />
      <SectionImagesAndText data={dataSectionGrid} greyBackground={false} />
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

export default HomePage;
