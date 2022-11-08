import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
	return (
		<>
			<Welcome name="Hi" surname="epita">
				<p>საქართველო არწივების დედა-მშობელი</p>
				<h1>hjabxiasbxh</h1>
			</Welcome>
			<Greet name="Hello" surname="tigina" />
			<Greet name="ბარო" surname="სიმონ" />
			<Greet name="Hello" surname="tigina" />
		</>
	);
}

export default App;
