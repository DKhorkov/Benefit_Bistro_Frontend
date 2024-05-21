import React from 'react';
import './ListElement.css';


function ListElement({ value }) {
    return (
        <li className="List-element">
            {value}
        </li>
    )
}

export default ListElement;
