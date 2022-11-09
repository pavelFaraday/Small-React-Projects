import React, { Component } from "react";

class Message extends Component {
	constructor() {
		super();
		this.state = {
			message: "Welcome Visitor",
			city: "Tbilisi",
		};
	}

	changeMessage() {
		this.setState({
			message: "Thank You",
			city: "Norio",
		});
	}

	render() {
		return (
			<>
				<h1>{this.state.message}</h1>
				<h1>{this.state.city}</h1>
				<button onClick={() => this.changeMessage()}>Change</button>
			</>
		);
	}
}

export default Message;
