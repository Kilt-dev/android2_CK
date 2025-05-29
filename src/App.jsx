import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import DetailScreen from './components/DetailScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/detail" element={<DetailScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
