import React, { Component } from 'react';
import getStarshipImage from "../swapi-images";

class CartItem extends Component {

  render() {

    const starship = this.props.starship;

    return (
      <article className='cart-item'>
        <h4>{starship.name}</h4>
        <div className='cart-item-details'>
          <img src={getStarshipImage(starship.url, 250)} alt={starship.name}/>
          <div>
            <ul>
              <li>Prix : {starship.cost_in_credits}</li>
              <li>Quantité : {starship.in_cart}</li>
            </ul>
          </div>
        </div>
        <footer>
          <button onClick={() => this.props.editStarship(starship, 'ADD_TO_CART')}>+</button>
          <button onClick={() => this.props.editStarship(starship, 'REMOVE_FROM_CART')}>-</button>
        </footer>
      </article>
    );
  }

}

export default CartItem;