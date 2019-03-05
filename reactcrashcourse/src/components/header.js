// imports
import React, { Component } from 'react';
import  "../css/style.css";

// class component
class Header extends Component {
    // constructor - to make these properties available to render() 
    constructor(props) {
        super(props);
        
        // states for the component
        this.state = {
            title: "",
        }
    }

    // react event
    onClickHandler = (e) => {
        this.setState({
            // title from constructor
            title : e.target.value
        });
    }

    // render component
    render() {
        return (
            <header>
                <div className="logo"> Logo </div>
                {/* <input type="text" onClick={this.onClickHandler} /> */}
                <input type="text" onChange={this.onClickHandler} /> 
                <div>{ this.state.title }</div>                         
            </header>
        )
    }
}

// export component
export default Header;