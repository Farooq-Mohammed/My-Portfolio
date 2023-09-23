import React from "react";
import Promptopia from "../../assets/Promptopia.png";

import "./projects.css";

const Projects = () => {
	const projects = [
		{
			src: `${Promptopia}`,
			title: "Promptopia",
			desc: "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
			link: "www.google.com",
		},
		{
			src: `${Promptopia}`,
			title: "Notes app",
			desc: "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
			link: "www.google.com",
		},
		{
			src: `${Promptopia}`,
			title: "Promptopia",
			desc: "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
			link: "www.google.com",
		},
		{
			src: `${Promptopia}`,
			title: "Promptopia",
			desc: "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
			link: "www.google.com",
		},
		{
			src: `${Promptopia}`,
			title: "Notes app",
			desc: "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
			link: "www.google.com",
		},
		{
			src: `${Promptopia}`,
			title: "Promptopia",
			desc: "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
			link: "www.google.com",
		},
	];

	return (
		<div className="projects">
			<h1 className="projects__header">Projects</h1>
			<div className="projects__container">
				{projects.map((project, id) => {
					return (
						<div className="project__card" key={`project-${id}`}>
							<div className="product__card_template">
								<img src={project.src} alt="Title" />
								<div className="product__card-footer">
									<h3>{project.title}</h3>
								</div>
							</div>
							<div className="project__details">
								<h3 className="project__title">{project.title}</h3>
								<p className="project__desc">{project.desc}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
