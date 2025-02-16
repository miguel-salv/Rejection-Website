import React from 'react';
import ResourceCard from './shared/ResourceCard';

function DreamJobRejection() {
  const resources = [
    {
      title: "Career Pivoting",
      description: "Explore alternative career paths",
      url: "https://www.themuse.com/advice/career-pivot",
      icon: "🔄"
    },
    {
      title: "Mindfulness Resources",
      description: "Tools for emotional well-being",
      url: "https://www.mindful.org",
      icon: "🧘"
    },
    {
      title: "Networking Guide",
      description: "Build meaningful professional connections",
      url: "https://www.linkedin.com/learning",
      icon: "🤝"
    }
  ];

  return (
    <div className="page-container">
      <h1>Got Rejected from Your Dream Job? Here's How to Move Forward</h1>
      <p>
        It’s natural to feel hurt and disappointed. Allow yourself the space to grieve this loss — your feelings matter.
      </p>
      <h2>Steps to Rebuild:</h2>
      <ul>
        <li style={{ '--li-index': 1 }}>Reflect on the experience with kindness and learn what you can</li>
        <li style={{ '--li-index': 2 }}>Consider reapplying in the future when you feel ready</li>
        <li style={{ '--li-index': 3 }}>Explore alternative paths that might excite you</li>
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

export default DreamJobRejection;