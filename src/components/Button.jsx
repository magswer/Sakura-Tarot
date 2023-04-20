import React from 'react'
import '../styles/button.css'
import { Link } from 'react-router-dom'

function Button({threecards}) {
  return (
    <>
    <Link to='/lectura' state= {{from: threecards}}>
    <div className= 'container-button'>
    <button>Ver la lectura de las cartas</button>
    </div>
    </Link>
    </>
  )
}

export default Button

