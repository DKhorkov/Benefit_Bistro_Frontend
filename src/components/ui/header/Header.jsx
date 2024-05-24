import React, { useState } from 'react';
import logo from '../../../logo.svg';
import './Header.css';
import ListElement from "../ListElement";
import Button from "../Button";


const element = React.createElement


export default function Header() {
    // Работа с состоянием, чтобы реакт не считал элементы верстки статическими, а считал их реактивными. Является hook-ом.
    // useState должен использоваться только внутри компонента и на верхнем уровне (не в теле цикла или ветвления)
    // const stateArray = useState(0)
    // const loginCount = stateArray[0]  // Переданное в useState значение
    // const setLoginCount = stateArray[1]  // Функция, которая меняет данное значение
    let [loginCount, setLoginCount] = useState(0);

    let loginButtonData = {
        name: "Login"
    }

    function handleLogin(info) {
        console.log(info);

        // content поменяется только после следующего render, так что его использование далее в теле этой функции невозмонжо
        setLoginCount(++loginCount)
    }

    const ul = element(
        'ul',
        null,
        [
            <ListElement className='List-element' value={<img src={logo} className="Header-logo" alt="logo" />} />,
            <ListElement className='List-element' value="BenefitBistro" />,
            <ListElement className='List-element' value={'Login clicked: ' + loginCount} />
        ]
    )

    return element(
        'header',
        {className: 'Header'},
        [
            ul,

            /* Использование второго типа синтекса через Children из React*/
            <Button className='Header-button' onClick={() => handleLogin('Logging in')}>{loginButtonData}</ Button>
        ]
    )
}
