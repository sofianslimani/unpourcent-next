import React, {useEffect, useState} from 'react';

const SectionThreeKpis = ({data, color}) => {
	
	const [kpis, setKpis] = useState([]);
	
	
	useEffect(() => {
		if (data) {
			setKpis(data)
		}
	}, []);
	
	
	return (<section className={`section-three-kpis container-s`}>
			<aside className={`section-three-kpis-container ${color}`}>
				{kpis.map((item, index) => {
					return (<div key={index} className={"section-three-kpis-container-item"}>
							<h2 className={"section-three-kpis-container-price bold text-38 color-white"}>{item.count}{item.isPrice ? "€" : ""}</h2>
						<p className={"text-16 color-white regular"}>{item.text}</p>
						</div>)
				})}
			</aside>
		</section>);
};

export default SectionThreeKpis;
