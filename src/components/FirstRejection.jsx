import React from 'react';
import firstRejectionImage from '../images/first-rejection.svg';

function FirstRejection() {
  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Your First Rejection: A Step Toward Growth</h1>
            <p>
              Remember, every rejection is an opportunity in disguise. Reflect on the lessons learned and use them to sharpen your approach.
            </p>
          </div>
          <img 
            src={firstRejectionImage} 
            alt="Starting fresh illustration" 
            className="header-image"
          />
        </div>
      </header>
      <h2>Simple Next Steps:</h2>
      <ul>
        <li style={{ '--li-index': 1 }}>Consider asking for constructive feedback</li>
        <li style={{ '--li-index': 2 }}>Think about refining your resume</li>
        <li style={{ '--li-index': 3 }}>Reflect on your interview performance</li>
      </ul>
    </div>
  );
}

export default FirstRejection;