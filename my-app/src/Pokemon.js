import React from 'react';
import Button from 'react-bootstrap/Button';


class Pokemon extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = props.state;
	  this.id = props.id
	}
	render() {
		return (
			<li>
				"Pokemon"
				{this.id}
			</li>
		);
	}
}
export default Pokemon