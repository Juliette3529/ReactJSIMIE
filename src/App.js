import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListStarships from "./components/ListStarships";
import Cart from "./components/Cart";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {starships: []};
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships')
      .then(response => response.json())
      .then(data => {
        const starships = data.results;
        for (let i = 0; i < starships.length; i++) {
          starships[i].in_cart = 0;
          starships[i].stock = Math.floor(Math.random() * 10) - 1;
        }
        this.setState({starships: starships});

      });
  }

  render() {

    const cartStarships = this.state.starships.filter(starship => starship.in_cart > 0);

    return (
      <div className="container">

        <h1>Liste des vaisseaux</h1>

        <div className="homepage">
          <ListStarships starships={this.state.starships}/>
          <Cart starships={cartStarships}/>
        </div>

      </div>
    );
  }
}

export default App;