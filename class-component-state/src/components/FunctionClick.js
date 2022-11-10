import React from "react";

function FunctionClick() {
	function eventHandler() {
		alert("U clicked the button");
	}
	return (
		<>
			<button onClick={eventHandler}>Click</button>
		</>
	);
}

export default FunctionClick;
