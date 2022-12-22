import React from 'react';
import Header from '../components/Header';
//import Lettermold from '../components/Lettermold';
import Main2 from '../components/Main2';
import { useLocation } from 'react-router-dom';
import '../styles/secondpage.css'

function Secondpage() {
 
    const location = useLocation();
    const selectedCards = location.state?.from;
    return (
      <>
          <Header/>
          <Main2/>
          <main className="containerCardsSecond">
            {selectedCards.map((card, index) => (
              <div key={index} className="containerCardsSecondBox">
                <img
                  className="card card-image"
                  key={index}
                  src={card.clowCard}
                  alt={card.spanishName}
                />
                <div className="cointainerInfo">
                  {index === 0 && <h2>PASADO</h2>}
                  {index === 1 && <h2>PRESENTE</h2>}
                  {index === 2 && <h2>FUTURO</h2>}
                  <div className="cointainerMeaning">
                    <h3>{card.spanishName}</h3>
                    <p class= 'description'>"{card.meaning}"</p>
                  </div>
                </div>
              </div>
            ))}
        </main>
      </>
    )
  }
export default Secondpage
  
  
  

