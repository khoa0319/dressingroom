import React, { Component } from 'react';
import './App.css';

// Import component
import Contain from './Model/Contain'
import Btngroup from './Store/Btngroup';
import Store from './Store/Store';

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<h1 className="text-center">phòng thử đồ</h1>
				<div className="row">
					{/* Items */}
					<div className="col-md-8">
						<Btngroup />
						<Store />
					</div>

					{/* Model */}
					<div className="col-md-4">
						<Contain />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
