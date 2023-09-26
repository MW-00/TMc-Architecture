import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import './main.css';
import Navbar from './components/Nav'
import Footer from './components/Footer';
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About';
import Contact from './components/Contact';

import SkateSpace from './components/projects/SkateSpace';
import CuttySarkHouse from './components/projects/CuttySarkHouse';
import ZincExtension from './components/projects/ZincExtension';
import LarchExtension from './components/projects/LarchExtension';
import RobertsportCommunityCentre from './components/projects/RobertsportCommunityCentre';
import ListedFarmConversion from './components/projects/ListedFarmConversion';
import SteppedHouse from './components/projects/SteppedHouse';
import NetZeroEstate from './components/projects/NetZeroEstate';
import MyanmarSchool from './components/projects/MyanmarSchool';

function CanonicalLink() {
  const location = useLocation();
  const canonicalUrl = `${window.location.origin}${location.pathname}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}



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
          <Route path="/projects/cuttysarkhouse" element={<CuttySarkHouse />} />
          <Route path="/projects/zincextension" element={<ZincExtension />} />
          <Route path="/projects/skatespace" element={<SkateSpace />} />
          <Route path="/projects/larchextension" element={<LarchExtension />} />
          <Route path="/projects/robertsportcommunitycentre" element={<RobertsportCommunityCentre />} />
          <Route path="/projects/listedfarmconversion" element={<ListedFarmConversion />} />
          <Route path="/projects/steppedhouse" element={<SteppedHouse />} />
          <Route path="/projects/netzeroestate" element={<NetZeroEstate />} />
          <Route path="/projects/myanmarschool" element={<MyanmarSchool />} />


        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
