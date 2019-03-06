// imports
import React from 'react';
import ReactDOM from 'react-dom';

// component imports
import Header from './components/header.js';
import Register from './components/register.js';

// creating a single functional component
// that will render multiple components
const App = () => {
    return (
        <div>
            <Header />
            <Register />
        </div>
    )
}

// render components
ReactDOM.render(<App />, document.querySelector('#root'));
