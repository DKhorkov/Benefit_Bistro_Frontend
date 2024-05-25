import PropTypes from 'prop-types'
import ListElement from '../list/ListElement.jsx'
import Button from '../button/Button.jsx'
import logo from '../../../logo.svg'
import './Navbar.css'

export default function Navbar({ loginCount, handleLogin }) {
  const loginClickedValue = 'Login clicked: ' + loginCount
  const logoValue = (
    <img
      src={logo}
      className="logo list-element"
      alt="logo"
    />
  )

  return (
    <nav className="navbar">
      <ul>
        <ListElement>{logoValue}</ListElement>
        <ListElement>BenefitBistro</ListElement>
        <ListElement>{loginClickedValue}</ListElement>
      </ul>

      <Button onClick={handleLogin}>Login</Button>
    </nav>
  )
}

Navbar.propTypes = {
  loginCount: PropTypes.number.isRequired,
  handleLogin: PropTypes.func.isRequired
}
