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
        <li style={{ '--li-index': 1 }}>
          <strong>Process and Reflect</strong>
          <ul>
            <li style={{ '--li-index': 1 }}>Allow yourself to feel disappointed - it's a natural response</li>
            <li style={{ '--li-index': 2 }}>Write down specific aspects of the role that made it your "dream job"</li>
            <li style={{ '--li-index': 3 }}>Identify which skills or qualifications may need strengthening</li>
          </ul>
        </li>
        <li style={{ '--li-index': 2 }}>
          <strong>Gather Constructive Feedback</strong>
          <ul>
            <li style={{ '--li-index': 1 }}>Request detailed feedback from the interviewer or hiring manager</li>
            <li style={{ '--li-index': 2 }}>Schedule a meeting with your career advisor to discuss the experience</li>
            <li style={{ '--li-index': 3 }}>Share your experience with mentors who can provide industry insights</li>
          </ul>
        </li>
        <li style={{ '--li-index': 3 }}>
          <strong>Develop an Action Plan</strong>
          <ul>
            <li style={{ '--li-index': 1 }}>Create a timeline for addressing any skill gaps identified</li>
            <li style={{ '--li-index': 2 }}>Research similar roles at other companies that align with your goals</li>
            <li style={{ '--li-index': 3 }}>Consider if graduate school or additional certifications would help</li>
          </ul>
        </li>
        <li style={{ '--li-index': 4 }}>
          <strong>Maintain Professional Connections</strong>
          <ul>
            <li style={{ '--li-index': 1 }}>Send a gracious follow-up email thanking the interviewers</li>
            <li style={{ '--li-index': 2 }}>Connect with company representatives on LinkedIn</li>
            <li style={{ '--li-index': 3 }}>Ask to be considered for future opportunities if appropriate</li>
          </ul>
        </li>
        <li style={{ '--li-index': 5 }}>
          <strong>Explore Alternative Paths</strong>
          <ul>
            <li style={{ '--li-index': 1 }}>Research companies with similar missions or values</li>
            <li style={{ '--li-index': 2 }}>Consider roles that could serve as stepping stones</li>
            <li style={{ '--li-index': 3 }}>Look for opportunities to gain relevant experience through projects or internships</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default DreamJobRejection;