import React, { Component } from 'react';
import CartItem from "./CartItem";

class Cart extends Component {

  render() {

    const items = this.props.starships.map(starship => (
      <CartItem key={starship.url} starship={starship} editStarship={(starship, action) => this.props.editStarship(starship, action)}/>
    ));

    const total = this.props.starships.reduce((accumulator, starship) => (starship.cost_in_credits * starship.in_cart) + accumulator, 0);

    return (
      <aside className='cart'>
        <h2>Panier</h2>
        <section>
          {items}
        </section>
        <footer>
          Total : {total}
        </footer>
      </aside>
    );
  }

}

export default Cart;