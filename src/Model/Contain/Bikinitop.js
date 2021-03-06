import React, { Component } from 'react';

import { topStyle } from '../../Data/initStyle';

class Bikinitop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bikiniTopStyle: topStyle
		}
	}

	changeStyle = () => {
		this.setState({
			bikiniTopStyle: {
				width: "500px",
				height: "500px",
				//background: "`url(${this.props.imgSrc_2})`",
				position: "absolute",
				top: "-9%",
				left: "-5%",
				zIndex: "3",
				transform: "scale(0.5)"
			}
		});
	}

	componentWillReceiveProps() {
		this.changeStyle();
	}

	render() {
		let imgSrc;
		let newStyle = this.state.bikiniTopStyle;
		if (typeof this.props.item !== "undefined") {
			imgSrc = this.props.item.imgSrc_png;
			let background = `url(${imgSrc})`;
			newStyle = {...newStyle, background};
		} else {
			newStyle = topStyle;
		}
		return (
			<div>
				<div className="bikinitop" style={newStyle}>
				</div>
      </div>
		);
	}
}

export default Bikinitop;

