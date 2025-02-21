import React, { useState } from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import FirstRejection from './components/FirstRejection';
import DreamJobRejection from './components/DreamJobRejection';
import MultipleRejections from './components/MultipleRejections';
import DarkModeToggle from './components/shared/DarkModeToggle';
import ScrollToTop from './components/shared/ScrollToTop';
import Footer from './components/shared/Footer';
import './styles/main.css';

// Implement code splitting
const HomePage = React.lazy(() => import('./components/HomePage'));
const Resources = React.lazy(() => import('./components/Resources'));

// Add error boundaries
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="app-container">
      <HashRouter>
        <ScrollToTop />
        <div className="desktop-theme-toggle">
          <DarkModeToggle />
        </div>

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
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/first-rejection" element={<FirstRejection />} />
              <Route path="/dream-job-rejection" element={<DreamJobRejection />} />
              <Route path="/multiple-rejections" element={<MultipleRejections />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;