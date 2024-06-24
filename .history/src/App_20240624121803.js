import React from 'react';
import { WishlistProvider } from './';
import { TopSellers } from './components/Homepage/TopSellers/TopSellers';
import { WishListCard } from './components/WishList/WishListCard';

const App = () => {
  return (
    <WishlistProvider>
      <TopSellers />
      <WishListCard />
    </WishlistProvider>
  );
};

export default App;