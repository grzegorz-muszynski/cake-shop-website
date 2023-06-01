import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Realisations from './pages/Realisations';
import Products from './pages/Products';
import Menu from './components/Menu';
import MenuBackground from './components/MenuBackground';
import Offer from './pages/Offer';

function App() {
  return (
    <Router>
      <div id='App'>
        <Header />
        <Menu />
        {/* <MenuBackground /> */}
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/offer' element={<Offer />} />
          <Route path='/realisations' element={<Realisations />} />
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;