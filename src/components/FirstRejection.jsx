import React from 'react';
import ResourceCard from './shared/ResourceCard';

function FirstRejection() {
  const resources = [
    {
      title: "Resume Writing Tips",
      description: "Learn how to improve your resume",
      url: "https://www.indeed.com/career-advice/resumes-cover-letters",
      icon: "📝"
    },
    {
      title: "Interview Preparation",
      description: "Practice common interview questions",
      url: "https://www.glassdoor.com/Interview/index.htm",
      icon: "🎯"
    },
    {
      title: "Career Counseling",
      description: "Find professional guidance",
      url: "https://www.careercounselors.org",
      icon: "💡"
    }
  ];

  return (
    <div className="page-container">
      <h1>First Time Getting Rejected? Keep Going</h1>
      <p>
        Remember, rejection is a common experience and just one part of your journey. It does not define your worth.
      </p>
      <p>
        Take a moment to reflect on what this experience might teach you; every setback holds a lesson.
      </p>
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