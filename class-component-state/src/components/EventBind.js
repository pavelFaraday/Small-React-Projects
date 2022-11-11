import React, { Component } from "react";

class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello",
		};
	}

	changeText() {
		this.setState({
			message: "GoodBuy",
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={this.changeText.bind(this)}>Click</button>
			</div>
		);
	}
}

export default EventBind;
