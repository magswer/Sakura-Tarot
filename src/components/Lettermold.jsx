import React, { Component } from 'react'
import '../styles/Lettermold.css';

export class Lettermold extends Component {
  render() {
    return (
      <>
      <div className="cards-container"></div>
        <p className="tus-cartas"></p>
        <p className="time"></p>
        <p className="card-title"></p>
        <p className="card-description"></p>
      </>
    ) 
  }
}

export default Lettermold

Lettermold.defaultProps = { 
 
  }
  