import React from 'react';
import { WishlistProvider } from './WishlistContext';
import { TopSellers } from './TopSellers';
import { WishListCard } from './WishListCard';

const App = () => {
  return (
    <WishlistProvider>
      <TopSellers />
      <WishListCard />
    </WishlistProvider>
  );
};

export default App;