import React, { Component } from 'react';

// IMPORT COMPONENT
import Tabcontent from './Tabcontent/Tabcontent';

class Store extends Component {
	render() {
		return (
			<div className="store">
				<Tabcontent />
			</div>
		);
	}
}

export default Store;