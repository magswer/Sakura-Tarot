import React,  { useState } from 'react'
import GetCards from '../services/functions'
import '../styles/main'

function Main() {
    const [cards, setCards] = useState(null);
    GetCards (setCards);

  return (
    <>
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