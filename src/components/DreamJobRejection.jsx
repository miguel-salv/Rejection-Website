import React from 'react';
import dreamJobImage from '../images/dream-job.svg';

function DreamJobRejection() {
  const sources = [
    {
      id: 1,
      authors: "van Hooft, E. A. J., Kammeyer-Mueller, J. D., Wanberg, C. R., Kanfer, R., & Basbug, G.",
      year: 2021,
      title: "Job search and employment success: A quantitative review and future research agenda",
      journal: "Journal of Applied Psychology",
      volume: "106",
      issue: "5",
      pages: "674-713",
      doi: "https://doi.org/10.1037/apl0000675"
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Lost Out on a Dream Role? Let's Move Forward Together</h1>
            <p>
              It's natural to feel disappointed when a job opportunity you've invested your hopes in doesn't work out. Give yourself time to process the setback, but remember that this is just one step in your professional journey. Every successful person has faced rejection at some point - what matters is how you use this experience to bounce back stronger.
            </p>
            <p>
              Consider this moment not as an endpoint, but as valuable feedback that can help shape your career path. Many professionals later find that what seemed like a setback actually guided them toward even better opportunities they hadn't considered before.
            </p>
          </div>
          <img 
            src={dreamJobImage} 
            alt="Dream job illustration" 
            className="header-image"
          />
        </div>
      </header>
      <h2>Steps to Move Forward:</h2>
      <ul className="steps-list">
        <li style={{ '--li-index': 1 }}>
          <strong>Process and Reflect</strong>
          <p>
            Take time to acknowledge your feelings about the rejection while maintaining perspective about your long-term career goals.
          </p>
          <p>
            Analyze what specifically attracted you to this role and use these insights to identify other promising opportunities.
          </p>
        </li>
        <li style={{ '--li-index': 2 }}>
          <strong>Don't Lower Your Standards</strong>
          <p>
            Research suggests job search intensity is a poor predictor of future employment quality, whereas job search self-regulation and job search quality positively predicted not only quantitative employment success, but employment quality as well.<sup>1</sup>
          </p>
          <p>
            Don't spread yourself too thin, and continue applying to roles you are passionate about.
          </p>
        </li>
        <li style={{ '--li-index': 3 }}>
          <strong>Gather Valuable Insights</strong>
          <p>
            Reach out professionally to the hiring team for specific feedback about your candidacy and areas for improvement.
          </p>
          <p>
            Consult with career advisors and industry mentors to gain perspective on your experience and strategize next steps.
          </p>
        </li>
        <li style={{ '--li-index': 4 }}>
          <strong>Create Your Growth Plan</strong>
          <p>
            Develop a clear timeline for addressing any skill gaps or qualifications that may have affected your candidacy.
          </p>
          <p>
            Research alternative paths and companies that align with your career goals and values.
          </p>
        </li>
        <li style={{ '--li-index': 5 }}>
          <strong>Maintain Professional Relationships</strong>
          <p>
            Send thoughtful follow-up messages to your interviewers, expressing gratitude for the opportunity and their time.
          </p>
          <p>
            Build and nurture your professional network through LinkedIn and industry events to create future opportunities.
          </p>
        </li>
        <li style={{ '--li-index': 6 }}>
          <strong>Explore New Directions</strong>
          <p>
            Research similar roles at other companies that match your interests and career aspirations.
          </p>
          <p>
            Consider intermediate positions or alternative paths that could eventually lead to your dream role.
          </p>
        </li>
      </ul>

      <div className="sources-section">
        <h3>References</h3>
        <ul className="sources-list">
          {sources.map(source => (
            <li key={source.id} className="source-item">
              <p className="source-citation">
                <sup>{source.id}.</sup> {source.authors} ({source.year}). {source.title}. <em>{source.journal}</em>, {source.volume}({source.issue}), {source.pages}.
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

export default DreamJobRejection;