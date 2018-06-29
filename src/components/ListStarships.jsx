import React, { Component } from 'react';
import getStarshipImage from "../swapi-images";
import Starship from "./Starship";

class ListStarships extends Component {

  render() {
    const items = this.props.starships.map(starship => (
      <Starship starship={starship}/>
    ));

    const loading = (items.length > 0) ? '' : 'Chargement en cours...';

    return (
      <section className='list-starships'>
        {loading}
        {items}
      </section>
    );
  }

}

export default ListStarships;