import React, {useEffect, useState} from 'react';
import { HeroAssociation } from '../components/HeroAssociation';
import { SocialSection } from '../components/SocialSection';
import SectionThreeKpis from '../layouts/Sections/SectionThreeKpis';
import SectionImagesAndText from '../layouts/Sections/SectionImagesAndText';
import Link from 'next/link';
import { DonateSection } from '../components/DonateSection';

function Association() {
    
    useEffect(() => {
        document.title = "Un Pour Cent - Amatullah";
    }, []);
    
    
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
    text: "Amatullah en 2022 c'est 47 566 repas distribués, 4 943 colis alimentaires distribués dans le but de venir en aide aux plus démunis en leur offrant notamment des repas de qualité, des colis alimentaires ainsi qu’une présence bienveillante et une oreille attentive. La mission d’Amatullah est de tendre la main aux plus nécessiteux et pour cela, des centaines de bénévoles se mobilisent chaque jour sur le terrain afin de mener à bien cet objectif.",
    images: [
      'images/Amatullah1.png',
      'images/Amatullah2.png',
      'images/Amatullah3.png',
    ],
  });

  return (
    <div>
      <HeroAssociation />
      <SectionThreeKpis color={'green'} data={dataSectionThreeKpis} />
      <SectionImagesAndText greyBackground={false} data={dataSectionGrid} />
      <SectionImagesAndText
        inverse={true}
        greyBackground={false}
        data={dataSectionGrid}
      />
      <SocialSection />
      <DonateSection />
    </div>
  );
}

export default Association;
