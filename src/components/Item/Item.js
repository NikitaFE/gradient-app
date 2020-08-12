import React from 'react';

import './Item.scss';
import {ReactComponent as Close} from './close.svg';

const Item = ({ first, second, id, deleteItem }) => {

  const itemStyle = {
    backgroundImage: `linear-gradient(to right, ${first}, ${second})`
  };

  return (
    <div className="item" style={itemStyle}>
      <button
        type="button"
        className="item__delete"
        onClick={() => deleteItem(id)}
      >
        <Close />
      </button>
      <span className="item__label">{first}</span>
      <span className="item__label">{second}</span>
    </div>
  )
};

export default Item;