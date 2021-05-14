//TODO
import React from 'react';

var ListItem = (props) => {
  return (
<div className = "listItem" id = {props.item.idDrink} onClick = {this.addToFavorites} onClick = {() => {props.addToFavorites(props.item)}}>
  <h4>{props.item.strDrink}</h4>
  <div class = "imgDiv">
    <img src = {props.item.strDrinkThumb} />
  </div>
</div>

  )
}

export default ListItem;