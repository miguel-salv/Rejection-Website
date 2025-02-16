// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import FirstRejection from './components/FirstRejection';
import DreamJobRejection from './components/DreamJobRejection';
import MultipleRejections from './components/MultipleRejections';
import HomePage from './components/HomePage';
import './styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/first-rejection">First Job Rejection</Link>
        <Link to="/dream-job-rejection">Rejection from Your Dream Job</Link>
        <Link to="/multiple-rejections">Facing Multiple Rejections</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/first-rejection" element={<FirstRejection />} />
        <Route path="/dream-job-rejection" element={<DreamJobRejection />} />
        <Route path="/multiple-rejections" element={<MultipleRejections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;