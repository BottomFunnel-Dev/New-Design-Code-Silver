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


