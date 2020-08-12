import React, { useState, useEffect } from 'react';

import './ItemAddForm.scss';

const ItemAddForm = ({ addItem }) => {

  const hexRe = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;

  const [isValid, setIsValid] = useState(false);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(first, second);
    setFirst('');
    setSecond('');
  };

  useEffect(() => {
    const isValid = hexRe.test(first) && hexRe.test(second);
    setIsValid(isValid);
  }, [first, second, hexRe]);

  return (
    <form
      className="form"
      onSubmit={onSubmit}
    >
      <input  
        className="form__input"
        type="text"
        placeholder="First hex color"
        size="10"
        value={first}
        onChange={({target}) => setFirst(target.value)}
        required
      />
      <input  
        className="form__input"
        type="text"
        placeholder="Second hex color"
        size="10"
        value={second}
        onChange={({target}) => setSecond(target.value)}
        required
      />
    <button className="form__submit" disabled={!isValid}>Add gradient</button>
    </form>
  )
};

export default ItemAddForm;