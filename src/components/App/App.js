import React from 'react';

import './App.css';

import ItemAddForm from '../ItemAddForm';
import ItemList from '../ItemList';

function App() {
  return (
    <div className="app">
      <ItemAddForm />
      <ItemList />
    </div>
  );
}

export default App;
