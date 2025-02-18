import React, { useState } from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import FirstRejection from './components/FirstRejection';
import DreamJobRejection from './components/DreamJobRejection';
import MultipleRejections from './components/MultipleRejections';
import HomePage from './components/HomePage';
import DarkModeToggle from './components/shared/DarkModeToggle';
import ScrollToTop from './components/shared/ScrollToTop';
import Resources from './components/Resources';
import Footer from './components/shared/Footer';
import './styles/main.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="app-container">
      <HashRouter>
        <ScrollToTop />
        {/* Desktop dark mode toggle */}
        <div className="desktop-theme-toggle">
          <DarkModeToggle />
        </div>

        {/* Mobile open-menu button */}
        {!isNavOpen && (
          <button 
            className="mobile-nav-toggle"
            onClick={toggleNav}
            aria-label="Open navigation menu"
          >
            Menu <i className="fas fa-chevron-up"></i>
          </button>
        )}
        <div className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
          <Link to="/first-rejection" onClick={() => setIsNavOpen(false)}>First Rejection</Link>
          <Link to="/dream-job-rejection" onClick={() => setIsNavOpen(false)}>Dream Job Rejection</Link>
          <Link to="/multiple-rejections" onClick={() => setIsNavOpen(false)}>Multiple Rejections</Link>
          <Link to="/resources" onClick={() => setIsNavOpen(false)}>Resources</Link>
          {/* Mobile controls: dark mode toggle + close button */}
          {isNavOpen && (
            <div className="mobile-nav-controls">
              <DarkModeToggle />
              <button 
                className="close-nav-toggle"
                onClick={toggleNav}
                aria-label="Close navigation menu"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}
        </div>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/first-rejection" element={<FirstRejection />} />
            <Route path="/dream-job-rejection" element={<DreamJobRejection />} />
            <Route path="/multiple-rejections" element={<MultipleRejections />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;