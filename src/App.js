import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Responses from "./components/Responses/Responses";

import "./App.css";

const Main = () => (
	<>
		<Navbar />
		<Home />
		<About />
		<Skills />
		<Projects />
		<Contact />
		<Footer />
	</>
);

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/responses" element={<Responses />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
