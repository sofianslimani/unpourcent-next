import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroAssociation from './Partials/HeroAssociation';
import SocialSection from './Partials/SocialSection';
import SectionThreeKpis from '../../layouts/Sections/SectionThreeKpis';
import SectionImagesAndText from '../../layouts/Sections/SectionImagesAndText';
import { DonateSection } from '../../components/DonateSection';
import Head from 'next/head';

const ProjectOfTheMonth = () => {
  const seo = {
    title: 'Un Pour Cent - Soutenez des projets qui font du bien',
    description:
      "Avec Un Pour Cent, soutenez des projets qui font du bien. Chaques mois, découvrez et soutenez un nouveau projet et recevez des nouvelles de l'avancement du projet.",
  };

  const [dataSectionGrid, setDataSectionGrid] = useState({});

  useEffect(() => {
    setDataSectionGrid({
      isGrid: true,
      title: (
        <h2 className="text-30 color-black bold">
          L&apos;association du moment <span className="red">Amatullah</span>
        </h2>
      ),
      text: "Amatullah, fondée par une jeune femme en quête de justice et d'égalité sociale, est une association humanitaire engagée depuis 2006 pour soutenir les plus démunis en France et à l'international. Depuis sa création, Amatullah s'engage à fournir une assistance aux personnes en situation précaire en offrant des repas, des colis alimentaires aux familles et une présence réconfortante aux personnes touchées par la solitude. Aujourd'hui, l'association étend ses actions à travers le monde grâce à des projets humanitaires visant à combattre la précarité, les injustices et les inégalités.",
      images: [
        'images/amatullah/amatullah-1.png',
        'images/amatullah/amatullah-2.png',
        'images/amatullah/amatullah-3.png',
      ],
    });
  }, [dataSectionGrid]);

  const [dataSectionGridTwo, setDataSectionGridTwo] = useState({});

  useEffect(() => {
    setDataSectionGridTwo({
      cta: (
        <Link className={'button-secondary'} href={'/projet-du-mois'}>
          Soutenir le projet
        </Link>
      ),
      isGrid: true,
      title: (
        <h2 className="text-30 color-black bold">
          Soutenez le projet <span className="red">Amatullah</span>
        </h2>
      ),
      text: "Amatullah en 2022 c'est 47 566 repas distribués, 4 943 colis alimentaires distribués dans le but de venir en aide aux plus démunis en leur offrant notamment des repas de qualité, des colis alimentaires ainsi qu’une présence bienveillante et une oreille attentive. Tous les fonds récoltés durant cette période permettront de financer ce projet et de nourrir des familles.",
      images: [
        'images/amatullah/amatullah-4.jpg',
        'images/amatullah/amatullah-5.jpg',
        'images/amatullah/amatullah-6.jpg',
      ],
    });
  }, [dataSectionGridTwo]);

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>
      <HeroAssociation />
      <SectionThreeKpis color={'green'} />
      <SectionImagesAndText greyBackground={false} data={dataSectionGrid} />
      <SectionImagesAndText
        inverse={true}
        greyBackground={false}
        data={dataSectionGridTwo}
      />
      <SocialSection />
      <DonateSection
        title={'Soutenir ce projet maintenant'}
        description={
          'Faites une réelle différence en soutenant ce projet associatif. Votre contribution compte et contribuera à changer des vies.'
        }
        link={
          'https://checkout.stripe.com/c/pay/cs_live_a1QkAwlcmDOM3wWJvnaPkrlW1cFmt2Wj2LjlMZRRMcHBwLm6y7CkQhFaul#fidkdWxOYHwnPyd1blppbHNgWjA0SHF%2FXGRCbVNTTjVUT2pNf2BDPFNpQ3ZpNnVVSHA8TmZiRGpEU1c2MjFNVHdsRz1zSk9ccWxLPExOaEFjNUZLY3xnQGxPd3R2YXYySlI2VHJzRl01cnR0NTVQfzEyZ0l2fycpJ3VpbGtuQH11anZgYUxhJz8nZks3YVZqMXNSMTBEM2lsMG5uJ3gl'
        }
        linkText={'Soutenir le projet'}
        isExternal={true}
      />
    </>
  );
};

export default ProjectOfTheMonth;
