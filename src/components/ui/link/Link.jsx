import PropTypes from 'prop-types'

export default function Link({ to, children, className }) {
  return (
    <a
      className={className}
      href={to}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string
}
