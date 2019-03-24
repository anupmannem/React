import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.css'

class App extends Component {
	
	render() {
		const name = 'React'
		return(
			<div className='App'>
				<h1>Hello { name }</h1>
			</div>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'))