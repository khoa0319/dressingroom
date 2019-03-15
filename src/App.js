import React, { Component } from 'react';
import './App.css';

// Import component
import Contain from './Model/Contain'

class App extends Component {
	render() {
		return (
			<div className="App container-fluid">
					<h1 className="text-center">phòng thử đồ</h1>
					<div className="row">
						{/* Items */}
						<div className="col-md-8 col-lg-8"></div>

						{/* Model */}
						<div className="col-md-4 col-lg-4">
							<Contain />
						</div>
					</div>
				</div>
		);
	}
}

export default App;
