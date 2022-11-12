import React from "react";

const Person = ({ human }) => {
	return (
		<div>
			<h1>
				I am {human.name}, I am {human.age} old, My know {human.skill}
			</h1>
		</div>
	);
};

export default Person;
