import { createElement } from 'react';
import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import Button from "../../button/Button";
import './LoginModal.css'


export default function LoginModal({ isOpen, onModalClose }) {
    const loginModalBackDrop = useRef()

    function loginModalEffectHandler() {
        if (isOpen) {
            loginModalBackDrop.current?.showModal()
        } else {
            loginModalBackDrop.current?.close()
        }
    }

    // Эффект срабатывает при событии, но уже после рендеринга всех элементов.
    useEffect(
        loginModalEffectHandler,
        [isOpen],
    )

    const closeButton = createElement(
        'div',
        {key: 'closeButtonDiv'},
        <Button onClick={onModalClose} key='Close-button' className='CLose-button'>{ {name: 'Close'} }</Button>
    )

    const loginModal = createElement(
        'dialog',
        { className: 'Login-modal', ref: loginModalBackDrop, key: 'login-modal' },
        [
            closeButton,
        ]
    )

    // Модалки должны открываться НАД остальными элементами, поэтому лучше их создавать таким образом,
    // привязывая к элементу, который находится в самом начале верстки (index.html)
    return createPortal(
        loginModal,
        document.getElementById('Login-modal')
    )
}
