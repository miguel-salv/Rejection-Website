import React from 'react';
import firstRejectionImage from '../images/first-rejection.svg';

function FirstRejection() {
  const sources = [
    {
      id: 1,
      authors: "Day, N.",
      year: 2016,
      title: "Rejection Sensitivity in Job Seekers: Coping, Job Search Attitudes and Self-Reported Behavior",
      journal: "Academy of Management Proceedings",
      volume: "2016",
      pages: "11985",
      doi: "https://doi.org/10.5465/AMBPP.2016.11985ABSTRACT"
    },
    {
      id: 2,
      authors: "Faberman, R.J., Mueller, A.I., Şahin, A. and Topa, G.",
      year: 2022,
      title: "Job Search Behavior Among the Employed and Non-Employed",
      journal: "Econometrica",
      volume: "90",
      pages: "1743-1779",
      doi: "https://doi.org/10.3982/ECTA18582"
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Your First Rejection: It's Okay to Feel Disappointed</h1>
            <p>
              Getting your first job rejection can be particularly tough. It's completely normal to feel disappointed, frustrated, or even question your capabilities. These feelings are valid and shared by many students at this stage.
            </p>
            <p>
              Remember that a rejection is not a reflection of your worth or potential. It's simply one step in your professional journey, and every successful person has faced similar challenges.
            </p>
          </div>
          <img 
            src={firstRejectionImage} 
            alt="Starting fresh illustration" 
            className="header-image"
          />
        </div>
      </header>

      <h2>Steps to Move Forward:</h2>
      <ul className="steps-list">
        <li style={{ '--li-index': 1 }}>
          <strong>Gather Comprehensive Feedback</strong>
          <p>
            Reach out to the hiring team with a professional email requesting specific feedback about your application and interview performance.
          </p>
          <p>
            Use this feedback constructively to identify areas where you can improve and prepare better for future opportunities.
          </p>
        </li>
        <li style={{ '--li-index': 2 }}>
          <strong>Evaluate Your Application Materials</strong>
          <p>
            Review your resume and cover letter with fresh eyes, ensuring they effectively communicate your skills and experiences.
          </p>
          <p>
            Work with your career center or mentor to refine these documents and make them more impactful for future applications.
          </p>
        </li>
        <li style={{ '--li-index': 3 }}>
          <strong>Strengthen Interview Skills</strong>
          <p>
            Practice common interview questions and work on delivering clear, confident responses that highlight your capabilities.
          </p>
          <p>
            Consider recording mock interviews to identify areas where you can improve your communication and presentation style.
          </p>
        </li>
        <li style={{ '--li-index': 4 }}>
          <strong>Rejection Sensitivity</strong>
          <p>
            Rejection Sensitivity is a learned disposition where individuals anxiously expect rejection when going into a job application setting, increasing the chance of rejection.<sup>1</sup>
          </p>
          <p>
            This heightened sensitivity can lead to increased stress levels, reduced self-confidence, and a tendency to withdraw from future job opportunities.
          </p>
        </li>
        <li style={{ '--li-index': 5 }}>
          <strong>Develop Resilience</strong>
          <p>
            Job searching is often more intense at lower rungs at the ladder.<sup>2</sup> Remember that rejection is a normal part of the professional journey and doesn't define your worth or potential.
          </p>
          <p>
            Focus on the learning opportunities each application process provides, using them to build confidence and experience.
          </p>
        </li>
        <li style={{ '--li-index': 6 }}>
          <strong>Keep Moving Forward</strong>
          <p>
            Continue to explore new opportunities while maintaining a positive outlook. Each application is a fresh start.
          </p>
          <p>
            Stay engaged with your field through networking events, industry news, and professional development opportunities.
          </p>
        </li>
      </ul>

      <div className="sources-section">
        <h3>References</h3>
        <ul className="sources-list">
          {sources.map(source => (
            <li key={source.id} className="source-item">
              <p className="source-citation">
                <sup>{source.id}.</sup> {source.authors} ({source.year}). {source.title}. <em>{source.journal}</em>, {source.volume}, {source.pages}.
                <a href={source.doi} target="_blank" rel="noopener noreferrer" className="source-link">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FirstRejection;