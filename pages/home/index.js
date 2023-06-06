import React, {useState} from 'react';
import HomeHero from "./Partials/HomeHero";
import SectionThreeKpis from "../../layouts/Sections/SectionThreeKpis";
import SectionImgaesAndText from "../../layouts/Sections/SectionImagesAndText";
import HomeThreeCardsInformations from "./Partials/HomeThreeCardsInformations";

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
				isGrid: false,
				title: <h2 class='text-30 color-black bold'>L’association du moment <span class='red'>Amatullah</span></h2>,
				text: "Amatullah en 2022 c'est 47 566 repas distribués, 4 943 colis alimentaires distribués dans le but de venir en aide aux plus démunis en leur offrant notamment des repas de qualité, des colis alimentaires ainsi qu’une présence bienveillante et une oreille attentive. La mission d’Amatullah est de tendre la main aux plus nécessiteux et pour cela, des centaines de bénévoles se mobilisent chaque jour sur le terrain afin de mener à bien cet objectif.",
				images : [
					"images/Amatullah1.png",
					"images/Amatullah2.png",
					"images/Amatullah3.png",
				]
			},
		
		);
	
	
	return (<>
			<HomeHero/>
			<SectionThreeKpis color={"green"} data={dataSectionThreeKpis}/>
			<HomeThreeCardsInformations/>
			<SectionImgaesAndText greyBackground={true} data={dataSectionGrid}/>
		</>);
};

export default HomePage;
