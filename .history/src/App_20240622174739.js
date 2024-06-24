import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <AppRouter />
      </div>
    </CartProvider>
  );
}

export default App;


import React from 'react';
import { CartProvider } from './context/CartContext';
import { ListData } from './components/ListData';
import { WishListCard } from './components/WishListCard';

function App() {
  return (
    <CartProvider>
      <ListData />
      <WishListCard />
    </CartProvider>
  );
}

export default App;
