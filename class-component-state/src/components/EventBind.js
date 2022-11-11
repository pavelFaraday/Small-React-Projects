import React, { Component } from "react";

class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello",
		};

		// The Best option with event binding
		this.changeText = this.changeText.bind(this);
	}

	changeText() {
		this.setState({
			message: "GoodBuy",
		});
		console.log(this);
	}

	changeTextBack = () => {
		this.setState({
			message: "Hello",
		});
		console.log(this);
	};

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={this.changeText}>Click</button>
				<button onClick={this.changeTextBack}>Roll Back</button>
			</div>
		);
	}
}

export default EventBind;
