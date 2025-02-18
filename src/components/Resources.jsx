import React, { useState, useEffect } from 'react';
import '../styles/resources.css';

function Resources() {
  const resourceUrls = {
    resume: "https://www.cmu.edu/career/students-and-alumni/resource-library/resumes-and-cover-letters/index.html",
    college: "https://www.cmu.edu/career/students-and-alumni/resource-library/resources-by-college/index.html",
    reddit: "https://www.reddit.com/r/careerguidance",
    interview: "https://www.cmu.edu/ini/student-services/career_services/index.html",
    wellbeing: "https://www.cmu.edu/wellbeing/resources/therapy.html"
  };

  const resources = [
    { id: 'resume', title: 'Resume Help' },
    { id: 'college', title: 'CMU Career Resources' },
    { id: 'reddit', title: 'Career Guidance' },
    { id: 'interview', title: 'Interview Prep' },
    { id: 'wellbeing', title: 'Mental Well-being' }
  ];

  const scrollToResource = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth > 1000 ? 100 : 30;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Optional: Add scroll spy to highlight current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = resources.map(r => document.getElementById(r.id));
      const scrollPosition = window.scrollY + 200; // Offset for highlighting

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const activeButton = document.querySelector(`button[data-id="${section.id}"]`);
            if (activeButton) {
              document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
              activeButton.classList.add('active');
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [resources]);

  const navigateToSection = (direction) => {
    const sections = resources.map(r => document.getElementById(r.id));
    const scrollPosition = window.scrollY + 200;
    let currentIndex = -1;

    // Find current section
    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentIndex = index;
        }
      }
    });

    // Calculate target index
    let targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    
    // Ensure target index is within bounds
    if (targetIndex >= 0 && targetIndex < sections.length) {
      scrollToResource(resources[targetIndex].id);
    }
  };

  return (
    <div className="resources-layout">
      <nav className="resources-nav">
        {resources.map(resource => (
          <button 
            key={resource.id}
            data-id={resource.id}
            onClick={() => scrollToResource(resource.id)}
            className="nav-item"
          >
            {resource.title}
          </button>
        ))}
      </nav>

      <div className="mobile-nav-arrows">
        <button 
          onClick={() => navigateToSection('up')}
          className="mobile-nav-arrow up"
          aria-label="Navigate to previous section"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
        <button 
          onClick={() => navigateToSection('down')}
          className="mobile-nav-arrow down"
          aria-label="Navigate to next section"
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>

      <div className="page-container">
        <div id="resume">
          <a href={resourceUrls.resume} className="resource-card" target="_blank" rel="noopener noreferrer">
            <h2>Resume Help</h2>
            <h3><i className="fas fa-link"></i>  Website: CMU Resume & Cover Letter Resources</h3>
          </a>
          <div className="resource-content">
            <p>Steps to Use This Resource Effectively:</p>
            <ol>
              <li style={{ '--li-index': 1 }}>
                <strong>Review Resume & Cover Letter Guidelines:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Click on the "Resume and Cover Letters" section.</li>
                  <li style={{ '--li-index': 2 }}>Read through CMU's recommendations on formatting, structure, and common mistakes.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 2 }}>
                <strong>Download Resume Templates:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Navigate to the "Sample Resumes & Templates" section.</li>
                  <li style={{ '--li-index': 2 }}>Choose a template that matches your industry or experience level.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 3 }}>
                <strong>Use Resume Review Services:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Use the VMock system to automatically scan your resume for initial quality checking.</li>
                  <li style={{ '--li-index': 2 }}>Check for available resume review appointments through the CMU Career Center.</li>
                  <li style={{ '--li-index': 3 }}>Consider attending workshops or drop-in advising sessions for feedback.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 4 }}>
                <strong>Refine & Submit Your Resume:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Make necessary edits based on CMU's guidelines.</li>
                  <li style={{ '--li-index': 2 }}>Submit your resume for review if possible, or compare it to CMU's resume samples to ensure quality.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div id="college">
          <a href={resourceUrls.college} className="resource-card" target="_blank" rel="noopener noreferrer">
            <h2>CMU Career Resources by College</h2>
            <h3><i className="fas fa-link"></i> Website: CMU College-Specific Career Resources</h3>
          </a>
          <div className="resource-content">
            <p>Steps to Use This Resource Effectively:</p>
            <ol>
              <li style={{ '--li-index': 1 }}>
                <strong>Find Your College's Career Resources:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Scroll down to find your specific CMU College or Department.</li>
                  <li style={{ '--li-index': 2 }}>Click on your college's link to view specialized career resources.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 2 }}>
                <strong>Explore Industry-Specific Advice:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Look for resume samples, job search strategies, and networking opportunities tailored to your field.</li>
                  <li style={{ '--li-index': 2 }}>Identify faculty mentors, industry partners, or alumni connections recommended for your major.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 3 }}>
                <strong>Check for Career Events & Networking Opportunities:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Look for career fairs, networking nights, or employer connections.</li>
                  <li style={{ '--li-index': 2 }}>Use industry-specific job boards to find targeted opportunities.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 4 }}>
                <strong>Use Internship & Job Search Tools:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Access Handshake, internship postings, and company partnerships.</li>
                  <li style={{ '--li-index': 2 }}>Apply for internships, co-ops, or research positions relevant to your major.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div id="reddit">
          <a href={resourceUrls.reddit} className="resource-card" target="_blank" rel="noopener noreferrer">
            <h2>Career Guidance from Reddit</h2>
            <h3><i className="fas fa-link"></i>  Website: Reddit Career Guidance Forum</h3>
          </a>
          <div className="resource-content">
            <p>Steps to Use This Resource Effectively:</p>
            <ol>
              <li style={{ '--li-index': 1 }}>
                <strong>Search for Common Career Questions:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Use the search bar to look up specific topics (e.g., "interview tips," "career change advice," "entry-level jobs").</li>
                  <li style={{ '--li-index': 2 }}>Read top upvoted posts to find helpful discussions.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 2 }}>
                <strong>Ask Questions & Get Community Input:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Click "Create a Post" to ask for advice on resumes, job applications, or career transitions.</li>
                  <li style={{ '--li-index': 2 }}>Be specific in your question (e.g., "How can I improve my software engineering resume?") for better responses.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 3 }}>
                <strong>Engage with Industry Professionals:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Many professionals and recruiters share insights—look for "Hiring Managers" or experienced users responding to posts.</li>
                  <li style={{ '--li-index': 2 }}>If a response is particularly helpful, follow up with additional questions.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 4 }}>
                <strong>Be Mindful of Advice Quality:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Since Reddit is an open forum, verify advice with official career websites or CMU resources before acting on it.</li>
                  <li style={{ '--li-index': 2 }}>Cross-check information with CMU's career center if unsure.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div id="interview">
          <a href={resourceUrls.interview} className="resource-card" target="_blank" rel="noopener noreferrer">
            <h2>Interview Prep & Career Counseling</h2>
            <h3><i className="fas fa-link"></i>  Website: CMU INI Career Services</h3>
          </a>
          <div className="resource-content">
            <p>Steps to Use This Resource Effectively:</p>
            <ol>
              <li style={{ '--li-index': 1 }}>
                <strong>Schedule a Career Counseling Session:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Use the appointment booking system to schedule one-on-one career advising.</li>
                  <li style={{ '--li-index': 2 }}>Choose between resume reviews, interview prep, or general career guidance.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 2 }}>
                <strong>Practice for Interviews:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Explore mock interview sessions available through CMU's career services.</li>
                  <li style={{ '--li-index': 2 }}>Review common interview questions and strategies listed on the site.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 3 }}>
                <strong>Attend Career Development Events:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Look for career fairs, employer talks, and networking sessions.</li>
                  <li style={{ '--li-index': 2 }}>Register for industry-specific webinars to stay updated on hiring trends.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 4 }}>
                <strong>Leverage Alumni & Employer Connections:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Use the INI's network to find mentors, internship opportunities, and job leads.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div id="wellbeing">
          <a href={resourceUrls.wellbeing} className="resource-card" target="_blank" rel="noopener noreferrer">
            <h2>Mindfulness & Mental Well-being</h2>
            <h3><i className="fas fa-link"></i>  Website: CMU Well-being & Therapy Resources</h3>
          </a>
          <div className="resource-content">
            <p>Steps to Use This Resource Effectively:</p>
            <ol>
              <li style={{ '--li-index': 1 }}>
                <strong>Explore Therapy & Counseling Options:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Review available therapy services, including individual counseling and group sessions.</li>
                  <li style={{ '--li-index': 2 }}>Identify whether you need in-person or virtual sessions based on availability.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 2 }}>
                <strong>Utilize Mindfulness & Stress-Relief Tools:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Access CMU's guided meditation resources, stress-reduction exercises, and mental health workshops.</li>
                  <li style={{ '--li-index': 2 }}>Consider attending mindfulness sessions or wellness events to develop relaxation techniques.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 3 }}>
                <strong>Find Immediate Support If Needed:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>If experiencing high stress, anxiety, or depression, use CMU's crisis support options listed on the site.</li>
                  <li style={{ '--li-index': 2 }}>Contact CMU's mental health professionals for direct assistance.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;