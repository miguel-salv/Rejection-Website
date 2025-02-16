// src/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceCard from './shared/ResourceCard';
import '../styles/home.css'; // We'll create this new file for HomePage-specific styles

function HomePage() {
  const resources = [
    {
      title: "Community Support",
      description: "Connect with others sharing similar experiences",
      url: "https://www.reddit.com/r/careerguidance",
      icon: <i className="fas fa-hands-helping"></i>
    },
    {
      title: "Resume Improvements",
      description: "Create or enhance your resume",
      url: "https://www.canva.com/resumes/",
      icon: <i className="fas fa-file-alt"></i>
    },
    {
      title: "Personal Growth",
      description: "Resources for professional development",
      url: "https://www.mindtools.com",
      icon: <i className="fas fa-seedling"></i>
    }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Support and Guidance After Job Rejection</h1>
        <p className="header-subtitle">
          Carefully curated, gentle guidance and resources to help you through this challenging time.
        </p>
      </header>

      <section className="main-content">
        <div className="section-block">
          <h2>How to Use This Support</h2>
          <p>Explore the topics below to find the help that best suits your situation:</p>
          <div className="navigation-cards">
            <Link to="/first-rejection" className="nav-card">
              <h3>First Job Rejection</h3>
              <p>Getting through your first rejection experience</p>
            </Link>
            <Link to="/dream-job-rejection" className="nav-card">
              <h3>Dream Job Rejection</h3>
              <p>Coping with losing out on your ideal role</p>
            </Link>
            <Link to="/multiple-rejections" className="nav-card">
              <h3>Multiple Rejections</h3>
              <p>Staying resilient through repeated setbacks</p>
            </Link>
          </div>
        </div>

        <div className="section-block">
          <h2>General Tips for Healing and Growth</h2>
          <div className="tips-grid">
            {[
              "Prioritize self-care and give yourself time to heal",
              "Reflect on your experiences and embrace a growth mindset",
              "Stay proactive while being gentle with yourself",
              "Lean on friends, family, and mentors for support",
              "Celebrate each small success along the way"
            ].map((tip, index) => (
              <div key={index} className="tip-card">
                <span className="tip-number">{index + 1}</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-block">
          <h2>Additional Resources for Your Journey</h2>
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                {...resource}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;