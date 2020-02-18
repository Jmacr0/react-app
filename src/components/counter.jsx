import React, { Component } from "react";

class Counter extends Component {
	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }
	componentDidUpdate(prevProps, prevState) {
		console.log("prevProps", prevProps);
		console.log("prevState", prevState);
		if (prevProps.counter.value !== this.props.counter.value) {
			// aJax call to get new data from server
		}
	}

	componentWillUnmount() {
		console.log("Counter - Unmount")
	}

	render() {
		console.log("Counter - Rendered");
		return (
			// React.Fragment removes the tag from the DOM when rendered
			// <React.Fragment>
			<div>
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm"
				>
					Increment
                </button>
				<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
					Delete
				</button>
			</div>
			// </React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
