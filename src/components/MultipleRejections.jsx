import React from 'react';
import ResourceCard from './shared/ResourceCard';
import multipleRejectionsImage from '../images/multiple-rejections.svg';

function MultipleRejections() {
  const resources = [
    {
      title: "Job Search Strategy",
      description: "Optimize your job search approach",
      url: "https://www.indeed.com/career-advice/finding-a-job",
      icon: <i className="fas fa-chart-line"></i>
    },
    {
      title: "Professional Development",
      description: "Enhance your skills and qualifications",
      url: "https://www.coursera.org",
      icon: <i className="fas fa-book"></i>
    },
    {
      title: "Mental Health Support",
      description: "Resources for maintaining resilience",
      url: "https://www.betterhelp.com",
      icon: <i className="fas fa-star"></i>
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Facing Multiple Rejections? Build Your Resilience</h1>
            <p>
            It's normal to feel challenged when the setbacks add up. Each rejection brings you closer to discovering the right opportunity—keep moving forward.
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
        <li style={{ '--li-index': 1 }}>Tailor your applications by learning from past experiences</li>
        <li style={{ '--li-index': 2 }}>Invest in upskilling to boost your confidence and profile</li>
        <li style={{ '--li-index': 3 }}>Lean on supportive communities and mentorship for advice</li>
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

export default MultipleRejections;