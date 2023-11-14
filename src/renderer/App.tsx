import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import '@fontsource/open-sans';
import '@fontsource/open-sans/800.css';
import '@fontsource/open-sans/600.css';
import { MdAgriculture } from 'react-icons/md';
import { PiMagicWandLight } from 'react-icons/pi';
import { CssBaseline } from '@mui/material';
import icon from '../../assets/icon.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { SpeciesList } from './pages/SpeciesList';
import { Home } from './pages/Home';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/species-list" element={<SpeciesList />} />
        </Routes>
      </div>
    </Router>
  );
}
