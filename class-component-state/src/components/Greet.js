import React from "react";

const Greet = (props) => {
	const { name, heroName } = props;

	return (
		<>
			<h1>
				Hello {name}, I am {heroName}
			</h1>
		</>
	);
};

export default Greet;
