import React, { useState } from "react";

import "./contact.css";

const Contact = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		const form = document.forms["submit-to-google-sheet"];

		const formData = new FormData(form);
		formData.set("date", new Date(Date.now()));

		const sheetUrl =
			"https://script.google.com/macros/s/AKfycbxwegmt3jeUhoAh5mxwg073t5rVHvJj1V_4mIacxAnza2uswfmK07dS_tU3ncGYYrmo/exec";

		fetch(sheetUrl, { method: "POST", body: formData })
			.then((response) => {
				console.log("Success!", response);
				setData({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch((error) => console.error("Error!", error.message))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
	};

	return (
		<div className="contact__container" id="contact">
			<div className="contact__content">
				<div className="contact__left">
					<h1 className="contact__header">Contact Me</h1>
					<div className="social-icons">
						<a href="https://www.facebook.com">
							<i className="fab fa-facebook-square"></i>
						</a>
						<a href="https://www.instagram.com">
							<i className="fab fa-square-instagram"></i>
						</a>
						<a href="https://www.linkedin.com">
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
				</div>
				<form
					className="contact__right"
					name="submit-to-google-sheet"
					onSubmit={handleSubmit}
				>
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
						{loading ? "Submitting..." : "Submit"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
