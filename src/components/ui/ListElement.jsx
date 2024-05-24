import React from 'react';
import './ListElement.css';


export default function ListElement({ value, className }) {
    return React.createElement(
        'li',
        { className: className },
        value
    )
}
