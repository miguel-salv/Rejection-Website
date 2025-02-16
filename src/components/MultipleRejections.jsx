import React from 'react';
import ResourceCard from './shared/ResourceCard';

function MultipleRejections() {
  const resources = [
    {
      title: "Job Search Strategy",
      description: "Optimize your job search approach",
      url: "https://www.indeed.com/career-advice/finding-a-job",
      icon: "📊"
    },
    {
      title: "Professional Development",
      description: "Enhance your skills and qualifications",
      url: "https://www.coursera.org",
      icon: "📚"
    },
    {
      title: "Mental Health Support",
      description: "Resources for maintaining resilience",
      url: "https://www.betterhelp.com",
      icon: "🌟"
    }
  ];

  return (
    <div className="page-container">
      <h1>Facing Multiple Rejections? We're Here for You</h1>
      <p>Remember, it’s normal to feel overwhelmed. Every rejection is part of your unique journey.</p>
      <h2>Gentle Advice:</h2>
      <ul>
        <li style={{ '--li-index': 1 }}>Consider revisiting your approach by tailoring your applications and exploring new opportunities</li>
      </ul>
      <h2>Steps to Move Forward:</h2>
      <ul>
        <li style={{ '--li-index': 2 }}>Explore upskilling opportunities</li>
        <li style={{ '--li-index': 3 }}>Connect with supportive communities</li>
        <li style={{ '--li-index': 4 }}>Consider speaking with a career coach for personalized guidance</li>
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