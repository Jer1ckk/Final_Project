import React from 'react';
import Home from './Home';
import Gallery_Page from './Gallery';
import Info from './Info';
import About from './About';
import Layout from './layouts/layout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery_Page />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
