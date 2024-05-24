import React from 'react';
import './Button.css'


export default function Button({ name, children, ...props }) {
    let buttonName;
    if (children) {
        buttonName = children.name;
    } else {
        buttonName = name;
    }

    return React.createElement(
        "button",
        {...props, type: "button"},
        buttonName
    )
}
