import React from 'react';
import dreamJobImage from '../images/dream-job.svg';

function DreamJobRejection() {
  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Lost Out on a Dream Role? Let's Move Forward Together</h1>
            <p>
              It's natural to feel disappointed. Give yourself time to process the setback, but remember that this is just one step in your professional journey. You can bounce back stronger.
            </p>
          </div>
          <img 
            src={dreamJobImage} 
            alt="Dream job illustration" 
            className="header-image"
          />
        </div>
      </header>
      <h2>Steps to Rebuild:</h2>
      <ul>
        <li style={{ '--li-index': 1 }}>Reflect honestly on the experience, focusing on lessons learned</li>
        <li style={{ '--li-index': 2 }}>Consider reapplying or exploring organizations with similar missions</li>
        <li style={{ '--li-index': 3 }}>Stay open to new opportunities and career pivots</li>
      </ul>
    </div>
  );
}

export default DreamJobRejection;