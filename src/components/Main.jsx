import React,  { useState } from 'react'
import GetCards from '../services/functions'
import '../styles/main.css'
import Button from './Button';
//import ReactCardFlip from 'react-card-flip';


const defaultClowReverseImage = 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg';

function Main({threecards,setThreecards}) {
    const [cards, setCards] = useState(null);
    GetCards (setCards);

    
    const clickcard = (card) => {
        if (threecards && threecards.length < 3) {
                setThreecards ([...threecards, {...card }])
                console.log(threecards)
                return 
            }  
            (  alert ('Ya has agregado 3 cartas'))

          if (threecards && threecards.length === 2) {
              <Button/>
              return
          }
          (alert ('Elige al menos 3 cartas'))       
    } 

  return (
    <>
    <h3>Escoge 3 cartas:</h3>
    <div className = "container">
        {cards !== null
        ? cards.map((card) => ( 
           <div key= {card.id}>
                  <img src={card.cardsReverse.clowReverse || defaultClowReverseImage} alt= {card.spanishName} onClick ={ () => clickcard(card)}/>
           </div> 
        ))
        
      : "No hay cards"  }

    </div>
    </>
  );
}

export default Main;


  
