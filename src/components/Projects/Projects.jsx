import React, { useEffect, useState } from "react";

import "./projects.css";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const projectSheetUrl = "https://sheetdb.io/api/v1/bfts4xegadq6v";
		fetch(projectSheetUrl)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setProjects(data);
			});
	}, []);

	return (
		<div className="projects" id="works">
			<h1 className="projects__header">Projects</h1>
			<div className="projects__container">
				{projects.map((project, id) => {
					return (
						<a
							key={project.title}
							href={project.link}
							target="_blank"
							rel="noreferrer"
						>
							<div className="project__card" key={project.title}>
								<div className="product__card_template">
									<img src={project.poster} alt={project.title} />
									<div className="product__card-footer">
										<h2>{project.title}</h2>
									</div>
								</div>
								<div className="project__details">
									<h3 className="project__title">{project.title}</h3>
									<p className="project__desc">{project.description}</p>
								</div>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
