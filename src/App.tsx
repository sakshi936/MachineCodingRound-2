import "./App.css";
import CatsAroundUs from "./components/CatsAroundUs";
import RandomJokes from "./components/RandomJokes";
import RandomUser from "./components/RandomUser";

function App() {
	return (
		<>
			<RandomUser />
			<RandomJokes />
			<CatsAroundUs />
		</>
	);
}

export default App;
