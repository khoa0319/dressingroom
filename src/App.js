import React, { Component } from 'react';
import './App.css';

// Import component
import Contain from './Model/Contain'
import Btngroup from './Store/Btngroup';
import Store from './Store/Store';

// IMPORT DATA
import dataChosenItems from './Data/ChosenItems';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenItems: dataChosenItems.ListOfItems
		}
	}

	imgSrcTransferApp = (item) => {
		this.setState({ chosenItems: [...this.state.chosenItems, item] });
	}

	render() {
		return (
			<div className="container-fluid">
				<h1 className="text-center">phòng thử đồ - Khoa Huynh</h1>
				<div className="row">
					{/* Items */}
					<div className="col-md-8">
						<Btngroup />
						<Store imgSrcTransferApp={this.imgSrcTransferApp.bind(this)} />
					</div>

					{/* Model */}
					<div className="col-md-4">
						<Contain chosenItems={this.state.chosenItems} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
