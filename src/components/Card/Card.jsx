import React from "react";
import "./card.css";

const Card = ({ title, url }) => {
	return (
		<div className="card">
			<img src={url} alt="" />
		</div>
	);
};

export default Card;
