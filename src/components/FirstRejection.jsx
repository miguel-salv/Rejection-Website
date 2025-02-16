import React from 'react';
import ResourceCard from './shared/ResourceCard';
import firstRejectionImage from '../images/first-rejection.svg';

function FirstRejection() {
  const resources = [
    {
      title: "Resume Writing Tips",
      description: "Learn how to improve your resume",
      url: "https://www.indeed.com/career-advice/resumes-cover-letters",
      icon: <i className="fas fa-file-alt"></i>
    },
    {
      title: "Interview Preparation",
      description: "Practice common interview questions",
      url: "https://www.glassdoor.com/Interview/index.htm",
      icon: <i className="fas fa-bullseye"></i>
    },
    {
      title: "Career Counseling",
      description: "Find professional guidance",
      url: "https://www.careercounselors.org",
      icon: <i className="fas fa-lightbulb"></i>
    }
  ];

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
      
      <section className="resources-section">
        <h2>Helpful Resources</h2>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <ResourceCard 
              key={index}
              {...resource}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default FirstRejection;