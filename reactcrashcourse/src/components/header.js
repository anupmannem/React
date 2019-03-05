// imports
import React, { Component } from 'react';
import  "../css/style.css";

// class component
class Header extends Component {
    // react event    
    onClickHandler(e) {
        console.log(e.target.value);        
    }    
    render() {
        return (
            <header>
                <div className="logo"> Logo </div>
                {/* <input type="text" onClick={this.onClickHandler} /> */}
                <input type="text" onChange={this.onClickHandler} />                          
            </header>
        )
    }
}

// export component
export default Header;