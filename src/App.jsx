import React from 'react';
import Home from './Home';
import Gallery_Page from './Gallery';
import Info from './Info';
import About from './About';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery_Page />} />
        <Route path="/info" element={<Info />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

  );
}

export default App;
