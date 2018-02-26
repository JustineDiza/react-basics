import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	constructor() {
		super(); // Pre-requisite whenever you have React.Component extension
		this.getHobbies = 'write poems and listen to Owl City music.';
	}

	// Creating methods in a class
	getAge(age) {
		return `Justine and she's ${age} years old!`; // Using string templating
	}

	render() {
		return (
			// JSX must be wrapped in an enclosing tag, only one parent DOM element should appear
			<div>
				<h1>It's {this.getAge(23)}</h1> {/* Anything in {} will be executed as normal javascript */}
				<h2>She likes to {this.getHobbies}</h2>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);