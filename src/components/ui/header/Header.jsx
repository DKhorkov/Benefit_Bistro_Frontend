import { useEffect, useState } from 'react'
import LoginModal from '../modal/login/LoginModal'
import Navbar from './Navbar.jsx'
import './Header.css'
import isUserAuthenticated from '../../../api/isUserAuthenticated.js'

export default function Header() {
  // useState должен использоваться только внутри компонента и на верхнем уровне (не в теле цикла или ветвления)
  const [loginCount, setLoginCount] = useState(0)
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false)

  useEffect(() => {
    // using useEffect for async/await purposes and getting state from Promise
    async function getUserAuthenticated() {
      setUserIsAuthenticated(await isUserAuthenticated())
    }
    getUserAuthenticated()
  }, [userIsAuthenticated])

  function handleLogin() {
    // content поменяется только после следующего render, так что его использование далее в теле этой функции невозможно
    setLoginCount((prevLoginCount) => ++prevLoginCount)
    setLoginModalIsOpen(true)
  }

  function afterLoginFunc() {
    setLoginModalIsOpen(false)
    setUserIsAuthenticated(true)
  }

  return (
    <header className="header">
      <Navbar
        loginCount={loginCount}
        handleLogin={handleLogin}
        userIsAuthenticated={userIsAuthenticated}
      />

      <LoginModal
        isOpen={loginModalIsOpen}
        onModalClose={() => setLoginModalIsOpen(false)}
        afterLoginFunc={afterLoginFunc}
      />
    </header>
  )
}
