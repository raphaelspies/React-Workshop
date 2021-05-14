import React from 'react';

var Favorites = (props) => {

// if favorites exist
  if (props.favorites.length === 0) {
    return (
      <div> No Favorites </div>
    )
  }
  return (
<div>
{/* <Favorites favorites = {this.state.favorites} />
<List drinks = {} */}
  <h3>Favorites</h3>
  <div className = 'favoritesList'>
    {props.favorites.map( (drink, index) => (
      <img src = {drink.strDrinkThumb} />
    ))}
  </div>
</div>
  )
}

export default Favorites;

// <div>
//   <h3>Favorites</h3>
//   <div class = "favoritesList">
//     <div>
//       <h4>Favorite drink 1 name</h4>
//       <div className = "imgDiv">
//         <img src = {favorite drink 1 src}/>
//       </div>
//     </div>
//     <div>
//       <h4>Favorite drink 2 name</h4>
//       <div className = "imgDiv">
//         <img src = {favorite drink 2 src}/>
//       </div>
//     </div>
//   </div>
// </div> */