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
      <h2>Key Steps for Growth:</h2>
      <ul>
        <li style={{ '--li-index': 1 }}>
          <strong>Gather Comprehensive Feedback</strong>
          <p>Request feedback for each stage of the hiring process to understand areas for improvement.</p>
        </li>
        <li style={{ '--li-index': 2 }}>
          <strong>Evaluate Your Resume</strong>
          <p>Your resume is your first impression. Ensure it's comprehensive yet concise, highlighting your key achievements and skills.</p>
        </li>
        <li style={{ '--li-index': 3 }}>
          <strong>Review Interview Performance</strong>
          <p>If you're getting interviews but not offers, focus on improving your interview skills and presentation.</p>
        </li>
        <li style={{ '--li-index': 4 }}>
          <strong>Maintain a Growth Mindset</strong>
          <p>Remember that rejection is a universal experience. Use it as a learning opportunity rather than a setback.</p>
        </li>
        <li style={{ '--li-index': 5 }}>
          <strong>Manage Rejection Sensitivity</strong>
          <p>Don't let fear of rejection hold you back. Each application is a new opportunity, independent of past outcomes.</p>
        </li>
      </ul>
    </div>
  );
}

export default FirstRejection;