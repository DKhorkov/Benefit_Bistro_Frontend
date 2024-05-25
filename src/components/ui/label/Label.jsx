import PropTypes from 'prop-types'
import './Label.css'

export default function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="label"
    >
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired
}
