import PropTypes from 'prop-types'
import './Input.css'

export default function Input({ inputType, inputId, inputName, inputValue }) {
  return (
    <input
      id={inputId}
      type={inputType}
      name={inputName}
      value={inputValue}
    />
  )
}

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputId: PropTypes.number,
  inputName: PropTypes.string,
  inputValue: PropTypes.string
}
