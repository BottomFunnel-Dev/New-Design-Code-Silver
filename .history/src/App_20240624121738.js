import React from 'react';
import { WishlistProvider } from './WishlistContext';
import { TopSellers } from './components/Homepage/TopSellers/TopSellers';

const App = () => {
  return (
    <WishlistProvider>
      <TopSellers />
      <WishListCard />
    </WishlistProvider>
  );
};

export default App;