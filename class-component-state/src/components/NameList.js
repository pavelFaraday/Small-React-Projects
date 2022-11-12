import React from "react";

function NameList() {
	const names = ["Bruce", "Diana", "Joshua"];
	return (
		<div>
			{names.map((name) => (
				<h1>{name}</h1>
			))}
		</div>
	);
}

export default NameList;
