import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/open-sans/800.css';
import '@fontsource/open-sans/600.css';
import { CssBaseline } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import SpeciesList from './pages/SpeciesList';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/species-list" element={<SpeciesList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
