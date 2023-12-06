import React from 'react'
import './Button.scss'

const Button = ({ label, onClick, type='button', className}) => {
  return (
    <button
        className={ className } 
        onClick={ onClick } 
        type={type} 
    >
        {label}
    </button>
  )
}

export default Button