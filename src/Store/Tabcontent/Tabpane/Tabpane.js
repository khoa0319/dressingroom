import React, { Component } from 'react';

// IMPORT COMPONENT
import Item from './Item/Item';

// IMPORT DATA
import room from '../../../Data/GetData';
class Tabpane extends Component {
	constructor(props) {
		super(props);
		this.state = {
			room: room.ListOfItems,
			item: null
		}
	}

	// imgSrcTransferTabpane = (item) => {
	// 	this.setState({item});
	// }

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
			return <Item item={item} key={index} imgSrcTransferTabpane={this.props.imgSrcTransferTabcontent} />
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
			case 'tabShoes':
				tempArr = this.getTypeArray("shoes");
				elmItem = this.getElmItem(tempArr);
				break;
			case 'tabHandBags':
				tempArr = this.getTypeArray("handbags");
				elmItem = this.getElmItem(tempArr);
				break;
			case 'tabNecklaces':
				tempArr = this.getTypeArray("necklaces");
				elmItem = this.getElmItem(tempArr);
				break;
			case 'tabHairStyle':
				tempArr = this.getTypeArray("hairstyle");
				elmItem = this.getElmItem(tempArr);
				break;
			case 'tabBackground':
				tempArr = this.getTypeArray("background");
				elmItem = this.getElmItem(tempArr);
				break;		
			default:
				break;
		}

		return (
			<div className="tab-pane face in" id={this.props.buttonItem.tabName}>
				<div className="row">
					{elmItem}
				</div>

			</div>
		);
	}
}

export default Tabpane;