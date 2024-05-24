import React from 'react';
import './ListElement.css';


export default function ListElement({ value, ...props }) {
    return React.createElement(
        'li',
        { ...props },
        value
    )
}
