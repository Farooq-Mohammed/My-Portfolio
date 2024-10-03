import React from "react";

import JavaSVG from "../../assets/svg/JavaSVG";
import HtmlSVG from "../../assets/svg/HTMLSVG";
import CssSVG from "../../assets/svg/CssSVG";
import JavascriptSVG from "../../assets/svg/JavascriptSVG";
import ReactSvg from "../../assets/svg/ReactSVG";
import ReduxSVG from "../../assets/svg/ReduxSVG";
import Bootstrap from "../../assets/svg/BootstrapSVG";
import MaterialUISVG from "../../assets/svg/MaterialUISVG";
import NextjsSVG from "../../assets/svg/NextjsSVG";
import NodejsSVG from "../../assets/svg/NodejsSVG";
import SpringbootSVG from "../../assets/svg/SpringbootSVG";
import MongodbSVG from "../../assets/svg/MongodbSVG";
import MySqlSVG from "../../assets/svg/MySqlSVG";
import GitSVG from "../../assets/svg/GitSVG";
import DockerSVG from "../../assets/svg/DockerSVG";
import FigmaSVG from "../../assets/svg/FigmaSVG";

import "./skills.css";

const skills = [
	{ id: 1, title: "Java", svg: JavaSVG },
	{ id: 2, title: "HTML", svg: HtmlSVG },
	{ id: 3, title: "CSS", svg: CssSVG },
	{ id: 4, title: "JavaScript", svg: JavascriptSVG },
	{ id: 5, title: "React", svg: ReactSvg },
	{ id: 6, title: "Redux", svg: ReduxSVG },
	{ id: 7, title: "Bootstrap", svg: Bootstrap },
	{ id: 8, title: "Material UI", svg: MaterialUISVG },
	{ id: 9, title: "Next.js", svg: NextjsSVG },
	{ id: 10, title: "Node.js", svg: NodejsSVG },
	{ id: 11, title: "Spring Boot", svg: SpringbootSVG },
	{ id: 12, title: "MongoDB", svg: MongodbSVG },
	{ id: 13, title: "MySQL", svg: MySqlSVG },
	{ id: 14, title: "Git", svg: GitSVG },
	{ id: 15, title: "Docker", svg: DockerSVG },
	{ id: 16, title: "Figma", svg: FigmaSVG },
];

const Skills = () => {
	return (
		<div className="skills__set">
			<h1 className="skills__header">Things I can do</h1>
			<div className="container skills">
				{skills.map((skill) => (
					<div className="skill" id={skill.id} title={skill.title}>
						<skill.svg size={50} />
						<span>{skill.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
