import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './main.css';
import Navbar from './components/Nav'
import Footer from './components/Footer';
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About';
import Contact from './components/Contact';
import SteppedHouse from './components/projects/SteppedHouse';
import SkateSpace from './components/projects/SkateSpace';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>

          {/* main pages */}
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* project pages */}
          <Route path="/projects/skatespace" element={<SkateSpace />} />
          {/* <Route path="/projects/steppedhouse" element={<SteppedHouse />} /> */}


        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
