import React from 'react';

const Footer = () => {
	return (<footer className={"footer container-s"}>
			<aside className={"footer-container"}>
				<div className={"footer-container-logo"}>
					<img src="/logos/logo.svg" alt="logo"/>
				</div>
				<div className={"footer-container-plan-du-site"}>
					<h4 className={"text-16 color-black medium"}>Plan du site</h4>
					<ul>
						<li>Le projet du mois</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className={"footer-container-pages-legales"}>
					<h4 className={"text-16 color-black medium"}>Pages légales</h4>
					<ul>
						<li>Mentions légales</li>
						<li>Politique de confidentialité</li>
					</ul>
				</div>
				<div className={"footer-container-social"}>
					<h4 className={"text-16 color-black medium"}>Réseaux</h4>
					<ul>
						<li>Instagram</li>
					</ul>
				</div>
				<div className={"footer-container-newsletter"}>
				</div>
			</aside>
		</footer>);
};

export default Footer;
