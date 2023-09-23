import React from "react";

import Java from "../../assets/java.png";
import Javascript from "../../assets/javascript.png";
import CSS from "../../assets/css.png";
import Git from "../../assets/git.png";
import Html from "../../assets/html.png";
import Mongodb from "../../assets/mongodb.png";
import Mysql from "../../assets/mysql.png";
import Nextjs from "../../assets/nextjs.png";
import Nodejs from "../../assets/nodejs.png";
import Python from "../../assets/python.png";
import Reactjs from "../../assets/react.png";
import Redux from "../../assets/redux.png";

import "./skills.css";

const Card = ({ title, url }) => {
	return (
		<div className="card">
			<img src={url} alt={title} />
		</div>
	);
};

const Skills = () => {
	const skillset = [
		{ title: "Java", url: `${Java}` },
		{ title: "Python", url: `${Python}` },
		{ title: "Html", url: `${Html}` },
		{ title: "CSS", url: `${CSS}` },
		{ title: "JavaScript", url: `${Javascript}` },
		{ title: "React JS", url: `${Reactjs}` },
		{ title: "Redux", url: `${Redux}` },
		{ title: "Node JS", url: `${Nodejs}` },
		{ title: "Next JS", url: `${Nextjs}` },
		{ title: "MySQL", url: `${Mysql}` },
		{ title: "MongoB", url: `${Mongodb}` },
		{ title: "Git", url: `${Git}` },
	];

	return (
		<div className="skills__set">
			<h1 className="skills__header">Things I can do</h1>
			<div className="skills">
				{skillset.map((skill, id) => (
					<Card key={id} title={skill.title} url={skill.url} />
				))}
			</div>
		</div>
	);
};

export default Skills;
