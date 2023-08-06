import React from "react";
import "./about.css";

const About = () => {
	return (
		<div className="about">
			<div className="about__img_container">
				<img
					className="about__img"
					src="https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="img"
				/>
			</div>
			<div className="about__text_container">
				<h1 className="about__title">About me</h1>
				<p className="about__desc">
					I am an aspiring software engineer who has received comprehensive
					training in Java and MERN stack technology. Alongside this, I possess
					a profound understanding of data structures and algorithms. My goal is
					to apply my knowledge and skills to develop efficient and reliable
					software solutions. With a formal tone, I am committed to continuously
					learning and staying up-to-date with the latest advancements in the
					field to deliver high-quality results.
				</p>
				<a href="#contact" className="about-btn">
					Contact me
				</a>
			</div>
		</div>
	);
};

export default About;
