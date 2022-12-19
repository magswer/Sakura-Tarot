import React from 'react'
import '../styles/cardbox.css'

export default function Cardbox() {
  return (
    <>
    <h3>Tus cartas:</h3>
    <div className= 'cards-container'>
      <div className = 'cardbox'>
          <p className='time'></p>
          <p className='card-title'></p>
          <p className='card-description'></p>
     </div>
    </div>
    </>
  )
}
