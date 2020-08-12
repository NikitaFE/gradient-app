import React from 'react';

import './ItemList.scss';

import Item from '../Item';

const ItemList = ({ items, deleteItem }) => {

  const itemsDom = items.map(item => {
    return (
      <li key={item.id}>
        <Item {...item} deleteItem={deleteItem} />
      </li>
    )
  })

  return (
    <ul className="item-list">
      {itemsDom}
    </ul>
  )
};

export default ItemList;