import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import SearchPage from './components/SearchPage';

const App = () => (

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details/:name/:lat/:lon" element={<Details />} />
    <Route path="/search/:name" element={<SearchPage />} />
  </Routes>

);

export default App;
