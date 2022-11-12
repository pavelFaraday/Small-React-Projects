import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}

	// * Conditional Rendering - Element Variables

	render() {
		let message;
		if (this.state.isLoggedIn) {
			message = (
				<div>
					<h1>Hello John</h1>
					<p>How are You?</p>
				</div>
			);
		} else {
			message = <div>Hello Guest</div>;
		}

		return <div>{message}</div>;
	}
}

export default UserGreeting;
