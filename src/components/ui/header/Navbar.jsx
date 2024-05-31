import PropTypes from 'prop-types'
import ListElement from '../list/ListElement.jsx'
import Button from '../button/Button.jsx'
import Link from '../link/Link.jsx'
import logo from '../../../logo.svg'
import './Navbar.css'

export default function Navbar({ loginCount, handleLogin, userIsAuthenticated }) {
  const loginClickedValue = 'Login clicked: ' + loginCount
  const logoValue = (
    <img
      src={logo}
      className="logo list-element"
      alt="logo"
    />
  )

  const loginElement = <Button onClick={handleLogin}>Login</Button>
  const profileElement = (
    <Link
      to="/profile"
      className="button primary"
    >
      Profile
    </Link>
  )
  const loginOrProfileElement = userIsAuthenticated ? profileElement : loginElement

  return (
    <nav className="navbar">
      <ul>
        <Link to="/">{logoValue}</Link>
        <Link to="/">BenefitBistro</Link>
        <ListElement>{loginClickedValue}</ListElement>
      </ul>
      {loginOrProfileElement}
    </nav>
  )
}

Navbar.propTypes = {
  loginCount: PropTypes.number.isRequired,
  handleLogin: PropTypes.func.isRequired,
  userIsAuthenticated: PropTypes.bool.isRequired
}
