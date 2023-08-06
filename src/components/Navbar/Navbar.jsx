import React, { useState } from "react";

import "./navbar.css";

const Navbar = () => {
	const [selected, setSelected] = useState("home");
	const [menuActive, setMenuActive] = useState(false);

	return (
		<nav className="navbar__container">
			<div className="navbar__logo">My Portfolio</div>
			<div className="navbar__links">
				<a
					className={selected === "home" ? "active" : ""}
					onClick={() => setSelected("home")}
					href="#home"
				>
					Home
				</a>
				<a
					className={selected === "about" ? "active" : ""}
					onClick={() => setSelected("about")}
					href="#about"
				>
					About
				</a>
				<a
					className={selected === "works" ? "active" : ""}
					onClick={() => setSelected("works")}
					href="#works"
				>
					Works
				</a>
				<a
					className={selected === "contact" ? "active" : ""}
					onClick={() => setSelected("contact")}
					href="#contact"
				>
					Contact
				</a>
			</div>
			<div className="navbar__menu">
				<i
					className="fa-solid fa-bars"
					onClick={() => {
						setMenuActive((prev) => !prev);
						console.log("Menu!!!");
					}}
				></i>
				<div
					className={
						menuActive ? "navbar__menu_links active" : "navbar__menu_links"
					}
				>
					<a onClick={() => setSelected("home")} href="#home">
						Home
					</a>
					<a onClick={() => setSelected("about")} href="#about">
						About
					</a>
					<a onClick={() => setSelected("works")} href="#works">
						Works
					</a>
					<a onClick={() => setSelected("contact")} href="#contact">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
