import React, { Component } from 'react';
import getStarshipImage from "../swapi-images";

class Starship extends Component {

  render() {

    const starship = this.props.starship;

    return (
      <article key={starship.url} className='thumb-starship'>
        <h3>{starship.name}</h3>
        <img src={getStarshipImage(starship.url, 250)} alt={starship.name}/>
        <ul>
          <li>Prix : {starship.cost_in_credits}</li>
          <li>Stock : {starship.stock}</li>
        </ul>
      </article>
    );
  }

}

export default Starship;