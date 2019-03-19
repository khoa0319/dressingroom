import React, { Component } from 'react';

// IMPORT DATA
import { feetStyle } from '../../Data/initStyle'

class Feet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// footleftClass: footleftStyle,
			// footrightClass: footrightStyle,
			feet: feetStyle
		}
	}

	changeStyle = () => {
		this.setState({
			width: "500px",
			height: "1000px",
			position: "absolute",
			bottom: "-37%",
			right: "-3.5%",
			transform: "scale(0.5)",
			zIndex: "1"
		})
	}

	componentWillReceiveProps() {
		this.changeStyle();
	}
	render() {
		let imgSrc;
		let newStyle = this.state.feet;
		if (typeof this.props.item !== "undefined") {
			imgSrc = this.props.item.imgSrc_png;
			console.log(newStyle);
			let background = `url(${imgSrc})`;		 
			newStyle = { ...newStyle, background } 
		} else {
			newStyle = feetStyle;
		}
		return (
			<div>
				<div className="feet" style={newStyle}></div>
			</div>
		);
	}
}

export default Feet;
