import React from "react";

const Greet = (props) => {
	return (
		<div>
			<h1>
				My name is {props.name} and surname is {props.surname};
			</h1>
		</div>
	);
};

export default Greet;
