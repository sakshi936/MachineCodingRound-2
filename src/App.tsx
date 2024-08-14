import "./App.css";
import RandomJokes from "./components/RandomJokes";
import RandomUser from "./components/RandomUser";

function App() {
	return (
		<>
			<RandomUser />
			<RandomJokes />
			{/* <h1 className="text-3xl font-bold ">Hello world!</h1> */}
		</>
	);
}

export default App;
