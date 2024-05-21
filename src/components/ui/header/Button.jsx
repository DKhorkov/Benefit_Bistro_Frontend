import React from 'react';
import './Button.css'


function Button({ name, onClick, children }) {
    let bName;
    if (children) {
        bName = children.name;
    } else {
        bName = name;
    }

    return (
        <button className="Header-button" type='button' onClick={onClick}>
            {bName}
        </button>
    )
}

export default Button;
