// src/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
// Import your images
import supportImage from '../images/support.svg';
import growthImage from '../images/growth.svg';
import communityImage from '../images/community.svg';

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <div className="header-text">
            <h1>A Guide to Navigating Job Rejections</h1>
            <p className="header-subtitle">
              Discover support and actionable advice to help you transform setbacks into stepping stones for your future career. Made by CMU students for CMU students.
            </p>
          </div>
          <img 
            src={supportImage} 
            alt="Supportive illustration" 
            className="header-image"
          />
        </div>
      </header>

      <div className="special-notices">
        <div className="notice-card">
          <h3><i className="fas fa-exclamation-circle"></i> Marginalized Communities</h3>
          <p>If you are a member of a marginalized group, certain systemic factors can influence the likelihood of job rejection. These can be absolutely overcome but will require extra effort.</p>
        </div>
        <div className="notice-card">
          <h3><i className="fas fa-globe"></i> International Students</h3>
          <p>If you are not a citizen of the United States, it will be particularly difficult to get a visa sponsored for your first job, which may lead to a higher rejection rate than average.</p>
        </div>
        <div className="notice-card">
          <h3><i className="fas fa-brain"></i> Managing Your Emotions</h3>
          <p>Job rejection can trigger strong negative emotions. Remember that your worth isn't defined by rejections, and use these moments to reflect and grow rather than react impulsively.</p>
        </div>
      </div>

      <section className="main-content">
        <div className="section-block">
          <div className="section-header">
            <img 
              src={growthImage} 
              alt="Growth illustration" 
              className="section-image"
            />
            <div>
              <h2>How to Use This Guide</h2>
              <p>Explore topics tailored for college students – from internship rejections to major career transitions.</p>
            </div>
          </div>
          <div className="navigation-cards">
            <Link to="/first-rejection" className="nav-card">
              <h3>First Rejection</h3>
              <p>Understanding and bouncing back from your first rejection</p>
            </Link>
            <Link to="/dream-job-rejection" className="nav-card">
              <h3>Dream Job Rejection</h3>
              <p>Coping with losing out on your ideal role</p>
            </Link>
            <Link to="/multiple-rejections" className="nav-card">
              <h3>Multiple Rejections</h3>
              <p>Staying resilient when facing multiple rejections in your college journey</p>
            </Link>
            <Link to="/resources" className="nav-card">
              <h3>Resources</h3>
              <p>Access CMU career resources, interview prep, and mental well-being support</p>
            </Link>
          </div>
        </div>

        <div className="section-block">
          <div className="section-header">
            <div>
              <h2>General Tips for Healing and Growth</h2>
            </div>
            <img 
              src={communityImage} 
              alt="College community illustration" 
              className="section-image"
            />
          </div>
          <div className="tips-grid">
            {[
              "Utilize CMU's resources for guidance",
              "Engage in campus networking events and fairs",
              "Request feedback after internship interviews",
              "Build relationships with professors and alumni",
              "Balance your academics with career development"
            ].map((tip, index) => (
              <div key={index} className="tip-card">
                <span className="tip-number">{index + 1}</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;