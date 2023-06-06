import React, {useEffect, useState} from 'react';

const SectionImgaesAndText = ({data, greyBackground, customClasses}) => {
	
	
	const [content, setContent] = useState({});
	
	useEffect(() => {
		if (data){
			setContent(data)
		}
	}, []);
	
	
	
	return (
		<section className={"section-images-and-text container-l " + (greyBackground ? "grey-background " :"") + (customClasses ? customClasses : "")}>
			<aside className={"section-images-and-text-container"}>
				<div className={`section-images-and-text-container-img ` + (content.isGrid ? "grid" :"")}>
					{content.isGrid ?
						content.images.map((itemImg,index)=>{
							return (
								<img className={"item-img"} key={index} src={itemImg}/>
							)
						})
						: ""
					}
				</div>
				<div className={"section-images-and-text-container-text"}>
					{content.title}
					<p className={"text-16 color-black regular"}>{content.text}</p>
				</div>
			</aside>
		</section>
	);
};

export default SectionImgaesAndText;
