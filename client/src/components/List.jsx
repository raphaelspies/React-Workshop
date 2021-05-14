//TODO
import React from 'react';
import ListItem from './ListItem.jsx';

var List = (props) => {
  return(
     <div class = "list">
       {props.drink.map((drink, index) => (
         <ListItem item = {drink} key = {index}/>
       ))}
    </div>

  )
}

export default List;