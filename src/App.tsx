import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Saved } from './pages/Saved';
import { TechNews } from './pages/TechNews';
import { SpaceNews } from './pages/SpaceNews';
import { AISummary } from './pages/AISummary';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/tech" element={<TechNews />} />
          <Route path="/space" element={<SpaceNews />} />
          <Route path="/ai" element={<AISummary />} />
        </Routes>
    </>
  );
}

export default App;
