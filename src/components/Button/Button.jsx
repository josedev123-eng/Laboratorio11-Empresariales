import './Button.css'

// Reusable button: the text comes in children, the color in variant and the size in size
function Button({ children, variant = 'primary', size = 'normal', onClick, href, type = 'button' }) {
  const className = `button button-${variant} button-${size}`

  // If it has href it works as a link
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
