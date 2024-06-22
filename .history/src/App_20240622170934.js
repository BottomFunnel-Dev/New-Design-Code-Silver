import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { CartProvider } from './context/CartContext';  // Import CartProvider

function App() {
  return (
    <div className="App">
      <CartProvider> 
        <AppRouter/>
      </CartProvider>
    </div>
  );
}

export default App;
