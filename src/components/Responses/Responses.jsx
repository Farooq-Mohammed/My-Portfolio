import React, { useEffect, useState } from "react";

import "./Responses.css";

const Popup = (response, setModal) => (
	<div className="popup">
		<button className="close" onClick={() => setModal(false)}>
			&#88;
		</button>
		<div className="response">
			<h2 className="name">{response?.name}</h2>
			<p className="email">&#9993; {response?.email}</p>
			<small>{response?.date?.substr(0, 24)}</small>
			<p className="message">{response?.message}</p>
		</div>
	</div>
);

const Responses = () => {
	const [responses, setResponses] = useState([]);
	const [finalResponse, setFinalResponse] = useState(responses);

	const [search, setSearch] = useState("");
	const [sortBy, setSortBy] = useState("");

	const [data, setData] = useState();
	const [modal, setModal] = useState(false);

	useEffect(() => {
		if (!search.trim()) {
			setFinalResponse(responses);
			return;
		}
		const handler = setTimeout(() => {
			const result = responses.filter(
				(response) =>
					response.name.toLowerCase().includes(search.toLowerCase()) ||
					response.email.toLowerCase().includes(search.toLowerCase())
			);
			setFinalResponse(result);
		}, 1500);

		return () => clearTimeout(handler);
	}, [search, responses]);

	useEffect(() => {
		const spreadsheetURL = "https://sheetdb.io/api/v1/a3ij4pnhotjzy";
		fetch(spreadsheetURL)
			.then((response) => response.json())
			.then((data) => {
				setResponses(data);
			});
	}, []);

	return (
		<>
			<div className="response-toolbar">
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search by text, name or email..."
					name="search"
					className="search input"
				/>
				<select
					className="input"
					name="sortBy"
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="default">Default</option>
					<option value="latest">Latest</option>
					<option value="atoz" selected>
						A to Z
					</option>
				</select>
			</div>
			<div className="response-container">
				{finalResponse.length === 0 && <p>No responses found</p>}
				{finalResponse.map((response) => (
					<section key={response.message} className="response-section">
						<div className="response-header">
							<h3>{response.name}</h3>
							{response.email}
						</div>
						<span className="response-time">
							<small>{response.date.substr(0, 24)}</small>
						</span>
						<br />
						<br />
						<div className="btn-group">
							<button
								className="btn view"
								onClick={() => {
									setModal(true);
									setData(response);
								}}
							>
								View
							</button>
							{/* <button className="btn checked ">&#10004;</button> */}
						</div>
						<div className="response-message">
							<p>{response.message}</p>
						</div>
					</section>
				))}
			</div>
			{modal && Popup(data, setModal)}
		</>
	);
};

export default Responses;
