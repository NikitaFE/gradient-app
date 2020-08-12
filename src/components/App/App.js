import React, { useState } from 'react';

import './App.scss';

import ItemAddForm from '../ItemAddForm';
import ItemList from '../ItemList';

const AppContext = React.createContext();
export { AppContext };

const App = () => {

  const [items, setItems] = useState([
    {id: 1, first: '#e74c3c', second: '#3498db'},
    {id: 2, first: '#e67e22', second: '#2ecc71'},
    {id: 3, first: '#f1c40f', second: '#1abc9c'}
  ]);

  const addItem = (first, second) => {
    const newItems = [...items, {first, second, id: Date.now()}];
    setItems(newItems);
  };

  const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  return (
    <AppContext.Provider value={{ deleteItem }}>
      <div className="app">
          <ItemAddForm addItem={addItem} />
          <ItemList items={items} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
