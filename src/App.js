import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import SearchPage from './components/SearchPage';
import ErrorPage from './components/ErrorPage';

const App = () => (

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details/:name/:lat/:lon" element={<Details />} />
    <Route path="/search/:name" element={<SearchPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default App;
