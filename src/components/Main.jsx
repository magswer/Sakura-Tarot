import React,  { useState } from 'react'
import GetCards from '../services/functions'
import '../styles/main.css'

function Main() {
    const [cards, setCards] = useState(null);
    GetCards (setCards);

  return (
    <>
    <h3>Escoge 3 cartas:</h3>
    <div className = "container">
        {cards !== null
        ? cards.map((card) => (
            <div key= {card.id}>
                    <img src={card.cardsReverse.clowReverse} alt= {card.spanishName} />

            </div>
        ))
        
      : "No hay cards"  }

    </div>
    </>
  );
}

export default Main;