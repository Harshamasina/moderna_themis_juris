import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';

const App = () => (
  <BrowserRouter>
    <div className="app-background">
      <SEO />
      <div className="gradient-overlay" />
      <div className="themis-figure" aria-hidden="true" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <ScrollToTop />
    </div>
  </BrowserRouter>
);

export default App;
