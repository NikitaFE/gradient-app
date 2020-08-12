import React from 'react';

import './ItemAddForm.css';

const ItemAddForm = () => {
  return (
    <form>
      <input type="text" placeholder="First color"/>
      <input type="text" placeholder="Second color"/>
      <button>Add gradient</button>
    </form>
  )
};

export default ItemAddForm;