import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CatsAroundUs from "./components/CatsListing";
import RandomJokes from "./components/RandomJokes";
import RandomUser from "./components/RandomUser";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<RandomUser />} />
					<Route path="/random-user" element={<RandomUser />} />
					<Route path="/random-jokes" element={<RandomJokes />} />
					<Route path="/cats-listing" element={<CatsAroundUs />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
