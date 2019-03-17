import React, { Component } from 'react';

// IMPORT COMPONENT
import Item from './Item/Item';

// IMPORT DATA
import room from '../../../Data/GetData';
class Tabpane extends Component {
	constructor(props) {
		super(props);
		this.state = {
			room: room.ListOfItems
		}
	}

	getTypeArray = (tabType) => {
		let tempArr = [];
		for (const item of this.state.room) {
			if (item.type === tabType) {
				tempArr = [...tempArr, item];
			}
		}
		return tempArr;
	}

	getElmItem = (tempArr) => {
		let elmItem = tempArr.map((item, index) => {
			return <Item item={item} key={index} />
		})
		return elmItem;
	}
	
	render() {
		let elmItem = [];
		let tempArr = [];
		switch (this.props.buttonItem.tabName) {
			case 'tabTopClothes':
				tempArr = this.getTypeArray("topclothes");
				elmItem = this.getElmItem(tempArr);
				break;
			case 'tabBotClothes':
			tempArr = this.getTypeArray("botclothes");
			elmItem = this.getElmItem(tempArr);
				break;
			default:
				break;
		}

		return (
			<div className="tab-pane face in" id={this.props.buttonItem.tabName}>
				{elmItem}

			</div>
		);
	}
}

export default Tabpane;