import React from "react";
import Person from "./Person";

function NameList() {
	const persons = [
		{ id: 1, age: 23, name: "Luist", skill: "SuperMen" },
		{ id: 2, age: 78, name: "John", skill: "Xmen" },
	];
	const personList = persons.map((person) => (
		<Person key={person.id} human={person} />
	));
	return <div>{personList}</div>;
}

export default NameList;
