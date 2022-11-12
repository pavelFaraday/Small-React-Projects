import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}

	// * Conditional Rendering - Short Circuit Operator
	// ! use this approach when u want render something or nothing

	render() {
		return (
			this.state.isLoggedIn && (
				<div>
					<h1>Hello Tbilisi</h1>
					<h2>Hello Abudabi</h2>
				</div>
			)
		);
	}
}

export default UserGreeting;
