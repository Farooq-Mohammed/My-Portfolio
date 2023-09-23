import React from "react";

import "./prop.css";

const Prop = () => {
	const title = "Promptopia";
	const description =
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima veritatis officia nulla velit inventore blanditiis maiores nihil doloremque vel, cum nesciunt consequuntur iusto! Quod modi temporibus eveniet quidem, repudiandae culpa";

	return (
		<div className="propcard">
			<div className="image"></div>
			<div className="prop-footer">
				<h3>{title}</h3>
			</div>
			<div className="prop-details">
				<div className="prop-t">
					<h3>{title}</h3>
					<div className="prop-d">{description}</div>
				</div>
			</div>
		</div>
	);
};

export default Prop;
