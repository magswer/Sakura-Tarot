import React from 'react'
import '../styles/button.css'

function Button(props) {
  return (
    <>
    <div className= 'container-button'>
    <button>Ver la lectura de las cartas</button>
    </div>
    </>
  )
}

export default Button

Button.defaultProps = { 
  disabled: true
}