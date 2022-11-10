import React from "react";

const Greet = (props) => {
	return (
		<>
			<h1>
				Hello {props.name}, I am {props.heroName}
			</h1>
		</>
	);
};

export default Greet;
