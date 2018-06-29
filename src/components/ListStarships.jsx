import React, { Component } from 'react';
import Starship from "./Starship";

class ListStarships extends Component {

  render() {
    const items = this.props.starships.map(starship => (
      <Starship key={starship.url} starship={starship} editStarship={(starship, action) => this.props.editStarship(starship, action)}/>
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