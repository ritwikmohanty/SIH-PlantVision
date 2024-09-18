import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Gardenia from './components/Gardenia';
import Library from './components/Library';
import AloeVera from './components/Aloevera';
import Ashwagandha from './components/Ashwagandha';
import Tulsi from './components/Tulsi';  // Import Tulsi
import GotiKola from './components/GotiKola';  // Import GotiKola
import Neem from './components/Neem';  // Import Neem
import LemonGrass from './components/Lemongrass';
import PepperMint from './components/Peppermint';

import Floraquest from './components/Floraquest'; // Import the Floraquest component


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route - Shows Header and Hero */}
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Hero />
            </div>
          }
        />
        {/* Gardenia Route - Shows only Gardenia component */}
        <Route path="/gardenia" element={<Gardenia />} />
        {/* Library Route - Shows only Library component */}
        <Route path="/library" element={<Library />} />
        {/* Floraquest Route - Shows only Floraquest component */}
        <Route path="/floraquest" element={<Floraquest />} />
        <Route path="/library/aloe-vera" element={<AloeVera />} />
        <Route path="/library/ashwagandha" element={<Ashwagandha />} />
        <Route path="/library/tulsi" element={<Tulsi />} />  {/* Tulsi Route */}
        <Route path="/library/goti-kola" element={<GotiKola />} />  {/* Goti-kola Route */}
        <Route path="/library/neem" element={<Neem />} />
        <Route path="/library/lemon-grass" element={<LemonGrass />} />
        <Route path="/library/peppermint" element={<PepperMint />} />

      </Routes>
    </Router>
  );
};

export default App;
