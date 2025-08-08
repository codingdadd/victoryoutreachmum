import React from 'react';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Events from './pages/Events';
import About from './pages/About';
import Children from './pages/Children';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Login from './pages/Login';
import AdminPage from './components/AdminPage';
import EventsEditor from './components/EventsEditor';
import ServicesEditor from './components/ServicesEditor'


function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
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
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/admin/events" element={<EventsEditor />} />
          <Route path="/admin/services" element={<ServicesEditor />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;