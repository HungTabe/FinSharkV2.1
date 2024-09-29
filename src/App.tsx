import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CartList/CardList';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
    <Search />
    <CardList />
    </div>
  );
}

export default App;
