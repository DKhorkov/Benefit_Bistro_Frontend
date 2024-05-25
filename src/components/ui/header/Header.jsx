import { useState } from 'react'
import LoginModal from '../modal/login/LoginModal'
import Navbar from './Navbar.jsx'
import './Header.css'

export default function Header() {
  // useState должен использоваться только внутри компонента и на верхнем уровне (не в теле цикла или ветвления)
  let [loginCount, setLoginCount] = useState(0)
  let [loginModalIsOpen, setLoginModalIsOpen] = useState(false)

  function handleLogin() {
    // content поменяется только после следующего render, так что его использование далее в теле этой функции невозможно
    setLoginCount((prevLoginCount) => ++prevLoginCount)
    setLoginModalIsOpen(true)
  }

  return (
    <header className="header">
      <Navbar
        loginCount={loginCount}
        handleLogin={handleLogin}
      />

      <LoginModal
        isOpen={loginModalIsOpen}
        onModalClose={() => setLoginModalIsOpen(false)}
      />
    </header>
  )
}
