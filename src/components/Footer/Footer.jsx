import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer__desc">Farooq</div>
			<div className="footer__links__container">
				<a className="footer_link" href="#github">
					Github
				</a>
				<a className="footer_link" href="#facebook">
					Facebook
				</a>
				<a className="footer_link" href="#linkedIn">
					Linked In
				</a>
			</div>
			<div className="footer__contact">omar.faroo023@gmail.com</div>
		</div>
	);
};

export default Footer;
