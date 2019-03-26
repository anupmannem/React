import React, { Component } from 'react'

export default class Searchbar extends Component {	

	constructor(props){
		super(props);		
		this.state = {
			video: '',			
		}
	}

	getInput = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		return(
			<div>
			<input name='video' value={this.state.video} onChange={this.getInput} />
			<h1>{this.state.video}</h1>
			</div>
		)
	}
}