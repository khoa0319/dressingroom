import React, { Component } from 'react';
import Body from './Contain/Body';
import Model from './Contain/Model';
import Bikinitop from './Contain/Bikinitop';
import Bikinibottom from './Contain/Bikinibottom';
import Feet from './Contain/Feet';
// Import child component

class Contain extends Component {
	render() {
		const style = {
			containClass: {
				width: "460px",
				height: "590px",
				margin: "0 auto",
				background: "url('./images/background/background_998.jpg')",
				position: "relative"
			}
		};
		return (
			<div className="contain" style={style.containClass}>
				<Body />
				<Model />
				<Bikinitop />
				<Bikinibottom />
				<Feet />
			</div>
		);
	}
}

export default Contain;