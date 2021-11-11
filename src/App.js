import React, { useState, useEffect } from 'react';
import './App.css';

import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Viewport from './components/Viewport';

function App() {
  return (
    <>
      <Header />
      <Viewport />
    </>
  );
}

export default App;
