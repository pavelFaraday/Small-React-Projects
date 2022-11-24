import React from "react";

const heading = {
	backgroundColor: "red",
	fontSize: "100px",
};

const Inline = (props) => {
	return (
		<div>
			<h1 style={heading}>Inline</h1>
			{/* every child component with classnames have inline scope  */}
			<p style={{ backgroundColor: "yellow" }}>
				inline styling as object
			</p>
		</div>
	);
};

export default Inline;
