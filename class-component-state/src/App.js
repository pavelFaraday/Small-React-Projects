import React from "react";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
	return (
		<>
			<Welcome name="Jemala" heroName="superLobio" />
			<Message />
			<Counter />
			<Greet name="Anzora" heroName="superbarana" />
			<FunctionClick />
			<ClassClick />
		</>
	);
}

export default App;
