import React, { Component } from 'react'

class Form extends Component {
	constructor() {
		super();

		this.initialState = {
			name: '',
			job: ''
		}

		this.state = this.initialState
	}

	handleChange = event => {
		const { name, value } = event.target
		this.setState({
			[name] : value,
		})
	}
 
	submitForm = event => {
		event.preventDefault()
		this.props.handleSubmit(this.state)
		this.setState(this.initialState)
	}

	render() {
		const { name, job } = this.state
		return (
			<form>
				<label>Name</label>
				<input 
					type='text'
					name='name'
					value={name}
					onChange={this.handleChange}>
				</input>
				<label>Job</label>
				<input 
					type='text'
					name='job'
					value={job}
					onChange={this.handleChange}>
				</input>
				<input 
					type='submit'
					value='submit'
					onClick={this.submitForm} />
			</form>
		)
	}
}

export default Form