import React, { Component } from "react";

class Welcome extends Component {
	render() {
		return (
			<div>
				<p>
					ჩემი სახელია {this.props.name} და ჩემი გვარია {"\n"}
					{this.props.surname}
				</p>
				{this.props.children}
			</div>
		);
	}
}

export default Welcome;
