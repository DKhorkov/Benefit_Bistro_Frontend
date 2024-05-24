import React from 'react';
import './Button.css'


export default function Button({ name, onClick, children, className }) {
    let bName;
    if (children) {
        bName = children.name;
    } else {
        bName = name;
    }

    return React.createElement(
        "button",
        {className: className, onClick: onClick, type: "button"},
        bName
    )
}
