import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	increment() {
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	}

	decrement() {
		this.setState((prevState) => ({
			count: prevState.count - 1,
		}));
	}

	render() {
		return (
			<div className="flex">
				<button onClick={() => this.decrement()}>-</button>
				<h1>{this.state.count}</h1>
				<button onClick={() => this.increment()}>+</button>
			</div>
		);
	}
}

export default Counter;
