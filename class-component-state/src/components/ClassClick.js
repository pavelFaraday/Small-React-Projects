import React, { Component } from "react";

class ClassClick extends Component {
	eventHandler() {
		alert("U clicked the button");
	}
	render() {
		return (
			<div>
				<button onClick={this.eventHandler}>Click Me</button>
			</div>
		);
	}
}

export default ClassClick;
