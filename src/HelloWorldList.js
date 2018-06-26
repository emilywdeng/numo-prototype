import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';

class HelloWorldList extends Component {
	constructor(props) {
		super(props);
		this.state = { greetings: ['Nathan', 'Emily', 'Alexis']};
	}

	renderGreetings() {
		return this.state.greetings.map (name => (<HelloWorld key={name} name={name}/>));
	}

	render() {
		return (
			<div className="HelloWorldList">
				{this.renderGreetings()}
			</div>
		);
	}
}

export default HelloWorldList;