// src/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DescriptionPage from './pages/DescriptionPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/descriptionpage" element={<DescriptionPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

