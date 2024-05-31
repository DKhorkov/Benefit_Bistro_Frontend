import { createPortal } from 'react-dom'
import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../../button/Button'
import LoginForm from './LoginForm.jsx'
import './LoginModal.css'

export default function LoginModal({ isOpen, onModalClose, afterLoginFunc }) {
  const loginModalBackDrop = useRef()

  function loginModalEffectHandler() {
    if (isOpen) {
      loginModalBackDrop.current?.showModal()
    } else {
      loginModalBackDrop.current?.close()
    }
  }

  // Эффект срабатывает при событии, но уже после рендеринга всех элементов.
  useEffect(loginModalEffectHandler, [isOpen])

  const loginModal = (
    <dialog
      className="login-modal"
      ref={loginModalBackDrop}
    >
      <Button
        onClick={onModalClose}
        variant="close-button"
      >
        Close
      </Button>

      <LoginForm afterLoginFunc={afterLoginFunc} />
    </dialog>
  )

  // Модалки должны открываться НАД остальными элементами, поэтому лучше их создавать таким образом,
  // привязывая к элементу, который находится в самом начале верстки (index.html)
  return createPortal(loginModal, document.getElementById('login-modal'))
}

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  afterLoginFunc: PropTypes.func.isRequired
}
