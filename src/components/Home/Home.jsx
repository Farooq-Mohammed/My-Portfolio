import React from "react";

import "./home.css";

const Home = () => {
	return (
		<main className="main__container">
			<div className="home">
				<div className="text_container">
					<h1 className="title">MOHAMMED FAROOQ AHMED</h1>
					<p className="desc">
						I am an aspiring software engineer who has received extensive
						training in java and MERN stack technology, as well as a deep
						understanding of data structures and algorithms.
					</p>
					<button className="home-btn">Learn more</button>
				</div>
				<div className="img_container"></div>
			</div>
		</main>
	);
};

export default Home;
