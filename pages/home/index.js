import React, {useState} from 'react';
import HomeHero from "./Partials/HomeHero";
import SectionThreeKpis from "../../layouts/Sections/SectionThreeKpis";
import SectionImgaesAndText from "../../layouts/Sections/SectionImagesAndText";
import HomeThreeCardsInformations from "./Partials/HomeThreeCardsInformations";
import Link from "next/link";

const HomePage = () => {
	
	
	const [dataSectionThreeKpis, setDataSectionThreeKpis] = useState(
		[
		{
			isPrice: false,
			count: 345,
			text: "Collectée pour les différentes associations partenaire de un pour cent"
		},
		{
			isPrice: true,
			count: 878,
			text: "Collectée pour les différentes associations partenaire de un pour cent"
		},		{
			isPrice: false,
			count: 12,
			text: "Collectée pour les différentes associations partenaire de un pour cent"
		}
		
		]);
	
	
	const [dataSectionGrid, setDataSectionGrid] = useState(
			{
				cta : <Link className={"button-secondary"}  href={"/home"}>Découvrir le projet</Link>,
				isGrid: true,
				title: <h2 class='text-30 color-black bold'>L’association du moment <span class='red'>Amatullah</span></h2>,
				text: "Amatullah en 2022 c'est 47 566 repas distribués, 4 943 colis alimentaires distribués dans le but de venir en aide aux plus démunis en leur offrant notamment des repas de qualité, des colis alimentaires ainsi qu’une présence bienveillante et une oreille attentive. La mission d’Amatullah est de tendre la main aux plus nécessiteux et pour cela, des centaines de bénévoles se mobilisent chaque jour sur le terrain afin de mener à bien cet objectif.",
				images : [
					"images/Amatullah1.png",
					"images/Amatullah2.png",
					"images/Amatullah3.png",
				]
			},
		
		);
	
	const [dataSectionClassic, setDataSectionClassic] = useState(
		{
			isGrid: false,
			title: <h2 className='text-30 color-black bold'>Comment <span className={"red"}>Un Pour Cent</span> utilise votre <span className={"green"}>donation</span> ? </h2>,
			text: "Chaques euros récolté à partir des donations réalisée à Un Pour Cent est utilisé dans le financement du projet mis en avant au moment du don. Nous sélectionnons avec soin un projet associatif chaque mois, en veillant à ce qu'il ait un impact positif sur la société.Votre don est reversé intégralement à ce projet pour réaliser ses objectifs. " +
				"" +
				"Ensemble, nous faisons une différence significative dans la vie des personnes qui ont besoin d'aide.Merci de votre soutien!",
			images : [
				"images/joel-muniz-A4Ax1ApccfA-unsplash 2.png",
			]
		},
	
	);
	
	
	
	return (<>
			<HomeHero/>
			<SectionThreeKpis color={"green"} data={dataSectionThreeKpis}/>
			<HomeThreeCardsInformations/>
			<SectionImgaesAndText customClasses={"section-how-un-pour-cent-use-donation"} inverse={true} greyBackground={true} data={dataSectionClassic}/>
			<SectionImgaesAndText  greyBackground={false} data={dataSectionGrid}/>
	
	</>);
};

export default HomePage;
