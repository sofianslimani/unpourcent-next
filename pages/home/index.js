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
      <h2 className="text-30 color-black bold">
        L’association du moment <span className="red">Amatullah</span>
      </h2>
    ),
    text: "Amatullah, fondée par une jeune femme en quête de justice et d'égalité sociale, est une association humanitaire engagée depuis 2006 pour soutenir les plus démunis en France et à l'international. Depuis sa création, Amatullah s'engage à fournir une assistance aux personnes en situation précaire en offrant des repas, des colis alimentaires aux familles et une présence réconfortante aux personnes touchées par la solitude. Aujourd'hui, l'association étend ses actions à travers le monde grâce à des projets humanitaires visant à combattre la précarité, les injustices et les inégalités.",
    images: [
      'images/amatullah/amatullah-1.png',
      'images/amatullah/amatullah-2.png',
      'images/amatullah/amatullah-3.png',
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
      <DonateSection
        title={'Découvrez dès maintenant le projet du moment'}
        description={'Découvrez dès maintenant le projet associatif mis en avant ce mois-ci sur notre plateforme. Soyez inspiré par son impact et participez à cette belle aventure de solidarité.'}
        link={'/association'}
        linkText={'Découvrir le projet'}
        isExternal={false}
      />
    </>
  );
};

export default HomePage;
