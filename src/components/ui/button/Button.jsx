import PropTypes from 'prop-types'
import './Button.css'

export default function Button({ children, onClick, variant = 'primary', buttonType = 'button' }) {
  return (
    <button
      className={'button ' + variant}
      onClick={onClick}
      type={buttonType}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  buttonType: PropTypes.string
}
