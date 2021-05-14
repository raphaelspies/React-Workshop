import React from 'react';
import List from './List.jsx';
import Favorites from './Favorites.jsx';
import dummy from '../../../public/data/dummy.js';
//TODO

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      drinks: [],
      favorites: []
    };
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  };

  addToFavorites(drink) {
    this.setState({
      favorites: [...this.state.favorites, drink]
    })
  }


  componentDidMount() {
    this.setState({
      drinks: dummy.drinks
    })
  }

  removeFavorite(drink) {
    this.setState({
      favorites: this.state.favorites.filter(favoriteDrink => (
        favoriteDrink.idDrink !== drink.idDrink
      ))
    })
  }

  render () {
    return (
       <div>
        <h2 className = "header">Cocktails</h2>
        <List drinks = {this.state.drinks}/>
        </div>
    )
  }
}

export default App;