import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Saved } from './pages/Saved';
import { TechNews } from './pages/TechNews';
import { SpaceNews } from './pages/SpaceNews';
import { Navbar } from './components/Navbar';
import { AISummary } from './pages/AISummary';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/tech" element={<TechNews />} />
        <Route path="/space" element={<SpaceNews />} />
        <Route path="/ai" element={<AISummary />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
