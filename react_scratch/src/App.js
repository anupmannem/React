import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();
		this.state = {
			fname: '',
			lname: ''
		}
	}
	
	getInputs = (e) => this.setState({ [e.target.name]: e.target.value })
	
	submitForm = (e) => {
		e.preventDefault()
		const formData = {
			fname: this.state.fname,
			lname: this.state.lname
		}
		
		axios
			.post('/', formData)
			.then(res => console.log(res.data))
			.catch(err => console.log(err))
	}
	
	render() {
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<label htmlFor="input">FirstName</label>
					<input type="text" id="input" name="fname" value={this.state.fname} onChange={this.getInputs} />
					<label htmlFor="input">LastName</label>
					<input type="text" id="input" name="lname" value={this.state.lname} onChange={this.getInputs} />
					<button type="submit">Submit</button> 
				</form>
			</div>
		);
	}
}

export default App;
