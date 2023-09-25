import React, { useState } from "react";

import "./contact.css";

const Contact = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		setData(...data, ([e.target.name] = e.target.value));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="contact__container" id="contact">
			<div className="contact__content">
				<div className="contact__left">
					<h1 className="contact__header">Contact Me</h1>
					<div className="social-icons">
						<a>
							<i className="fab fa-facebook-square"></i>
						</a>
						<a>
							<i className="fab fa-square-instagram"></i>
						</a>
						<a>
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
				</div>
				<form className="contact__right" onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						value={data.name}
						onChange={handleChange}
						placeholder="Your Name"
						required
					/>
					<input
						type="text"
						name="email"
						value={data.email}
						onChange={handleChange}
						placeholder="Your Email"
						required
					/>
					<textarea
						cols={45}
						rows={12}
						name="message"
						value={data.message}
						onChange={handleChange}
						placeholder="Drop a note..."
						required
					/>
					<button type="submit" className="contact-btn">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
