import React from 'react'

import './style.css'

const Button = ({ text, color, onClick }) => {

  return (
    <button
      className="btn-action-card"
      // style={{ backgroundColor: color || '#FFF' }}
      onClick={onClick}
    >
      <span>
        {text}
      </span>
    </button>
  )
}

export default Button
