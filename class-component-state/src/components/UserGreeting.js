import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}

	render() {
		if (this.state.isLoggedIn) {
			return (
				<div>
					<h1>Hello John</h1>
					<p>idi na more putin</p>
				</div>
			);
		} else {
			return <h1>Hello She Chema</h1>;
		}
	}
}

export default UserGreeting;
