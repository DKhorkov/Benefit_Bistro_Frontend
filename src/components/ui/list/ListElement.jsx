import { createElement } from 'react';
import './ListElement.css';


export default function ListElement({ value, ...props }) {
    return createElement(
        'li',
        { ...props },
        value
    )
}
