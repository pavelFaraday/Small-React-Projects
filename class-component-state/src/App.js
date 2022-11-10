import React from "react";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Greet from "./components/Greet";

function App() {
	return (
		<>
			<Welcome name="Jemala" heroName="superLobio" />
			<Message />
			<Counter />
			<Greet name="Anzora" heroName="superbarana" />
		</>
	);
}

export default App;
