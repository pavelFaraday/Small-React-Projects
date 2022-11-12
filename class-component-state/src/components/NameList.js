import React from "react";

function NameList() {
	const persons = [
		{ id: 1, age: 23, name: "Luist", skill: "SuperMen" },
		{ id: 2, age: 78, name: "John", skill: "Xmen" },
	];
	const personList = persons.map((person) => (
		<h1>
			I am {person.name}, I am {person.age} old, My know {person.skill}
		</h1>
	));
	return <div>{personList}</div>;
}

export default NameList;
