import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Events from './pages/Events';
import About from './pages/About';
import Children from './pages/Children';
import Contact from './pages/Contact';
import Donation from './pages/Donation';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/children" element={<Children />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} /> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;