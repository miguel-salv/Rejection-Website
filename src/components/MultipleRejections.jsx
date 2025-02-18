import React from 'react';
import ResourceCard from './shared/ResourceCard';
import multipleRejectionsImage from '../images/multiple-rejections.svg';

function MultipleRejections() {
  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Facing Multiple Rejections? Build Your Resilience</h1>
            <p>
              It’s common to face setbacks during your college career search. Whether it's an internship or a campus recruiting challenge, every rejection is a step toward finding the right opportunity—keep pushing forward.
            </p>
          </div>
          <img 
            src={multipleRejectionsImage} 
            alt="Persistence illustration" 
            className="header-image"
          />
        </div>
      </header>
      <h2>Steps to Move Forward:</h2>
      <ul>
        <li style={{ '--li-index': 1 }}>Tailor your applications by learn from previous experiences</li>
        <li style={{ '--li-index': 2 }}>Enhance your skills with workshops and online courses relevant to your major</li>
        <li style={{ '--li-index': 3 }}>Reach out to campus career services, mentors, and alumni for guidance</li>
      </ul>
    </div>
  );
}

export default MultipleRejections;