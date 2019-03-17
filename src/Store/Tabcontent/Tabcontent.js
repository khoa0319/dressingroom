import React, { Component } from 'react';

// IMPORT component
import Tabpane from './Tabpane/Tabpane';

// IMPORT DATA
import ButtonArray from '../../Data/buttonArray';
class Tabcontent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ButtonArray
		}
	}
	
	render() {
		let elmTabpane = this.state.ButtonArray.map((button, index) => {
			return <Tabpane buttonItem={button} key={index} />
		});
		return (
			<div className="tab-content">
				{elmTabpane}
			</div>
		);
	}
}

export default Tabcontent;