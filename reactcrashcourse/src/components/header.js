// imports
import React from 'react';

// 
const info = {
    name: 'anup',
    course: 'react'
}
const enrolled_date = () => {    
    return Date.now();
}

//    functional component
const Header = () => {
    return (
        <div>
            <h1> 
                { info.name } enrolled in { info.course } course on { enrolled_date() }
            </h1>
        </div>
    )
}

// export component
export default Header;