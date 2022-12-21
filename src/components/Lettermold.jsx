import React, { Component } from 'react'
import'../styles/Lettermold.css';

export class Lettermold extends Component {
  render() {
    return (
      <>
      <div>cards-container ClassName={}{this.props.text}</div>
      <h2> Tus cartas</h2>
      <p> ClassName="Tus carta</p>
      <p> ClassName="time"</p>
      <p> ClassName="card-title"</p>
      <p> ClassName="card-description"</p>
      </>
    ) 
  }
}

export default Lettermold
