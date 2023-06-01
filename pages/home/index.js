import React, {useState} from 'react';
import HomeHero from "./Partials/HomeHero";
import SectionThreeKpis from "../../layouts/Sections/SectionThreeKpis";

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
	
	return (<>
			<HomeHero/>
			<SectionThreeKpis color={"green"} data={dataSectionThreeKpis}/>
		</>);
};

export default HomePage;
