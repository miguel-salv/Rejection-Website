import React from 'react';
import multipleRejectionsImage from '../images/multiple-rejections.svg';

function MultipleRejections() {
  const sources = [
    {
      id: 1,
      authors: "Hunkenschroer, A.L., Luetge, C.",
      year: 2022,
      title: "Ethics of AI-Enabled Recruiting and Selection: A Review and Research Agenda",
      journal: "Journal of Business Ethics",
      volume: "178",
      pages: "977-1007",
      doi: "https://doi.org/10.1007/s10551-022-05049-6"
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Facing Multiple Rejections? Build Your Resilience</h1>
            <p>
              It's not uncommon for college students to encounter multiple rejections, especially during the competitive internship or entry-level job search. After sending out countless applications and attending interviews, it's easy to feel disheartened.
            </p>
            <p>
            However, persistence and adaptability are crucial skills that will serve you throughout your career. Every rejection is a stepping stone toward finding the right opportunity that aligns with your goals.
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
      <ul className="steps-list">
        <li style={{ '--li-index': 1 }}>
          <strong>Refine Your Application Strategy</strong>
          <p>
            Focus on quality over quantity in your applications. Take time to tailor each resume and cover letter to highlight relevant achievements and skills that match the position's requirements.
          </p>
          <p>
            Research each company thoroughly to ensure your application aligns with their values and demonstrates your genuine interest in the role.
          </p>
        </li>
        <li style={{ '--li-index': 2 }}>
          <strong>Navigate AI-Enabled Recruiting</strong>
          <p>
            Understand that many companies now use AI-driven hiring processes, which can impact how your application is evaluated. Be mindful of algorithmic bias, transparency issues, and varying selection criteria across different platforms.<sup>1</sup>
          </p>
          <p>
            Research and prepare for AI-based assessments while staying informed about ethical considerations in automated hiring processes. Consider how to present your qualifications in a way that effectively communicates your value to both human and AI reviewers.
          </p>
        </li>
        <li style={{ '--li-index': 3 }}>
          <strong>Seek Constructive Feedback</strong>
          <p>
            After each rejection, professionally request feedback about your application or interview performance. Understanding specific areas for improvement will strengthen future applications.
          </p>
          <p>
            Connect with mentors and alumni who can provide valuable insights from their own experiences with rejection and success.
          </p>
        </li>
        <li style={{ '--li-index': 4 }}>
          <strong>Address Skill Gaps</strong>
          <p>
            Analyze patterns in your rejections to identify any consistent missing qualifications or skills. Develop these areas through targeted online courses, certifications, or workshops.
          </p>
          <p>
            Take on relevant side projects or volunteer work to build practical experience and enhance your portfolio.
          </p>
        </li>
        <li style={{ '--li-index': 5 }}>
          <strong>Build Your Support Network</strong>
          <p>
            Stay connected with peers, family, and friends during your job search journey. Share your experiences and challenges with others who understand your situation.
          </p>
          <p>
            Utilize campus resources, including career services and counseling support, to maintain your emotional well-being during the search process.
          </p>
        </li>
        <li style={{ '--li-index': 6 }}>
          <strong>Maintain Forward Momentum</strong>
          <p>
            Set achievable weekly goals for your job search, such as a specific number of quality applications or networking events to attend.
          </p>
          <p>
            Practice self-care and maintain interests outside of your job search to stay energized and mentally prepared for opportunities.
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

export default MultipleRejections;