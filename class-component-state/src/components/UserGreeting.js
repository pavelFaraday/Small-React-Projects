import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}

	// * Conditional Rendering - Ternary Operator

	render() {
		return this.state.isLoggedIn ? (
			<>
				<h1>Hello John</h1>
				<h2>How are you? </h2>
			</>
		) : (
			<div>Hello Guest</div>
		);
	}
}

export default UserGreeting;
