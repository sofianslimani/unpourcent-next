import React, { useState } from 'react';
import HomeHero from './Partials/HomeHero';
import SectionThreeKpis from '../../layouts/Sections/SectionThreeKpis';
import SectionImagesAndText from '../../layouts/Sections/SectionImagesAndText';
import HomeThreeCardsInformations from './Partials/HomeThreeCardsInformations';
import Link from 'next/link';
import HomeTabSection from './Partials/HomeTabSection';
import { DonateSection } from '../../components/DonateSection';
import ContactFaq from '../contact/Partials/ContactFaq';

const HomePage = () => {
  const [dataSectionThreeKpis, setDataSectionThreeKpis] = useState([
    {
      isPrice: false,
      count: 345,
      text: 'Collectée pour les différentes associations partenaire de un pour cent',
    },
    {
      isPrice: true,
      count: 878,
      text: 'Collectée pour les différentes associations partenaire de un pour cent',
    },
    {
      isPrice: false,
      count: 12,
      text: 'Collectée pour les différentes associations partenaire de un pour cent',
    },
  ]);

  const [dataSectionGrid, setDataSectionGrid] = useState({
    cta: (
      <Link className={'button-secondary'} href={'/home'}>
        Découvrir le projet
      </Link>
    ),
    isGrid: true,
    title: (
      <h2 class="text-30 color-black bold">
        L’association du moment <span class="red">Amatullah</span>
      </h2>
    ),
    text: "Amatullah en 2022 c'est 47 566 repas distribués, 4 943 colis alimentaires distribués dans le but de venir en aide aux plus démunis en leur offrant notamment des repas de qualité, des colis alimentaires ainsi qu’une présence bienveillante et une oreille attentive. La mission d’Amatullah est de tendre la main aux plus nécessiteux et pour cela, des centaines de bénévoles se mobilisent chaque jour sur le terrain afin de mener à bien cet objectif.",
    images: [
      'images/Amatullah1.png',
      'images/Amatullah2.png',
      'images/Amatullah3.png',
    ],
  });

  const [dataSectionClassic, setDataSectionClassic] = useState({
    isGrid: false,
    title: (
      <h2 className="text-30 color-black bold">
        Comment <span className={'red'}>Un Pour Cent</span> utilise votre <span className={'green'}> donation</span> ?{' '}
      </h2>
    ),
    text:
      "Chaque don effectué à Un Pour Cent est intégralement utilisé pour financer le projet mis en avant. Votre contribution a un impact direct et significatif dans la réalisation des objectifs du projet sélectionné. Votre soutien fait une réelle différence dans la vie des personnes qui ont besoin d'aide. Votre confiance est précieuse pour nous, et nous nous engageons à gérer vos dons de manière responsable et efficiente. Merci de votre précieux soutien !",
    images: ['images/joel-muniz-A4Ax1ApccfA-unsplash 2.png'],
  });

  return (
    <>
      <HomeHero />
      <SectionThreeKpis color={'green'} data={dataSectionThreeKpis} />
      <HomeThreeCardsInformations />
      <SectionImagesAndText
        customClasses={'section-how-un-pour-cent-use-donation'}
        inverse={true}
        greyBackground={true}
        data={dataSectionClassic}
      />
      <SectionImagesAndText greyBackground={false} data={dataSectionGrid} />
      <ContactFaq />
      <DonateSection />
    </>
  );
};

export default HomePage;
