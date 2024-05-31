import PropTypes from 'prop-types'
import './Form.css'

export default function Form({ action, method, children, onSubmit, variant = 'primary' }) {
  return (
    <form
      className={'form ' + variant}
      method={method}
      action={action}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

Form.propTypes = {
  method: PropTypes.string,
  action: PropTypes.string,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  variant: PropTypes.string
}
