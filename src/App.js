// src/App.js

import React from 'react';
import Header from './components/Header';
import DestinationForm from './components/DestinationForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './components/View';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{padding: '50px 100px'}}>
      <Router>
      <Routes>
      <Route path="/" element={<DestinationForm />} />
      <Route path="/view" element={<View />} />
      <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
      </div>
      {/* Other components go here */}
    </div>
  );
}

export default App;
