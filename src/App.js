import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

/*
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { username: 'sravya' };
    }
      render() {
        return(
        <div>
            <h1>{this.state.username}</h1>

            </div>
        );
    }
}
export default App;
*/
class App extends Component {
	constructor() {
		super();
		this.state = { works: false };
		this.change = this.change.bind(this);
    }
    change() {
		this.setState({ works: !this.state.works });
    }
    render() {
		let title = this.state.works ? 'yeah' : 'naah';
		let link;
		if (this.state.works) {
			link = <MWLink />;
		} else {
			link = <MNMLink />;
        }

        return (
			<div>
				<div title={title}>
					{link}
					<div className="form-group">
						<button type="button" className="btn btn-primary" onClick={this.change}>Change Name</button>
					</div>
				</div>

         </div>
		);
	}
}

export default App;

export class MNMLink extends Component {
	render() {
		return (
			<div>
				<a>http://www.vitwit.com</a>
			</div>
		);
	}
}


export class MWLink extends Component {
	render() {
		return (
			<div>
				<a>http://www.inviton.com</a>
			</div>
		);
	}
}



