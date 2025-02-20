import React, { useEffect, useMemo } from 'react';
import '../styles/resources.css';

function Resources() {
  const resourceUrls = {
    resume: "https://www.cmu.edu/career/students-and-alumni/resource-library/resumes-and-cover-letters/index.html",
    college: "https://www.cmu.edu/career/students-and-alumni/resource-library/resources-by-college/index.html",
    reddit: "https://www.reddit.com/r/careerguidance",
    interview: "https://www.cmu.edu/ini/student-services/career_services/index.html",
    wellbeing: "https://www.cmu.edu/wellbeing/resources/therapy.html"
  };

  const resources = useMemo(() => [
    { id: 'resume', title: 'Resume Help' },
    { id: 'college', title: 'CMU Career Resources' },
    { id: 'reddit', title: 'Career Guidance' },
    { id: 'interview', title: 'Interview Prep' },
    { id: 'wellbeing', title: 'Mental Well-being' }
  ], []);

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = resources.map(r => document.getElementById(r.id));
      const scrollPosition = window.scrollY + 200;

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

    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentIndex = index;
        }
      }
    });

    let targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    
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
                  <li style={{ '--li-index': 1 }}>Click on the <b>Resume and Cover Letters</b> section.</li>
                  <li style={{ '--li-index': 2 }}>Read through CMU's recommendations on formatting, structure, and common mistakes.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 2 }}>
                <strong>Download Resume Templates:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Navigate to the <b>Sample Resumes & Templates</b> section.</li>
                  <li style={{ '--li-index': 2 }}>Choose a template that matches your industry or experience level.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 3 }}>
                <strong>Use Resume Review Services:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Use the VMock system to automatically scan your resume for initial quality checking.</li>
                  <li style={{ '--li-index': 2 }}>Check for available <b>resume review appointments</b> through the CMU Career Center.</li>
                  <li style={{ '--li-index': 3 }}>Consider attending <b>workshops</b> or <b>drop-in advising sessions</b> for feedback.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 4 }}>
                <strong>Refine & Submit Your Resume:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Make necessary edits based on CMU's guidelines.</li>
                  <li style={{ '--li-index': 2 }}>Submit your resume for review if possible, or compare it to CMU's <b>resume samples</b> to ensure quality.</li>
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
                  <li style={{ '--li-index': 1 }}>Scroll down to find your specific <b>CMU College or Department</b>.</li>
                  <li style={{ '--li-index': 2 }}>Click on your college's link to view specialized career resources.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 2 }}>
                <strong>Explore Industry-Specific Advice:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Look for <b>resume samples</b>, <b>job search strategies</b>, and <b>networking opportunities</b> tailored to your field.</li>
                  <li style={{ '--li-index': 2 }}>Identify <b>faculty mentors</b>, <b>industry partners</b>, or <b>alumni connections</b> recommended for your major.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 3 }}>
                <strong>Check for Career Events & Networking Opportunities:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Look for <b>career fairs</b>, <b>networking nights</b>, or <b>employer connections</b>.</li>
                  <li style={{ '--li-index': 2 }}>Use <b>industry-specific job boards</b> to find targeted opportunities.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 4 }}>
                <strong>Use Internship & Job Search Tools:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Access <b>Handshake</b>, <b>internship postings</b>, and <b>company partnerships</b>.</li>
                  <li style={{ '--li-index': 2 }}>Apply for <b>internships</b>, <b>co-ops</b>, or <b>research positions</b> relevant to your major.</li>
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
                  <li style={{ '--li-index': 1 }}>Use the <b>search bar</b> to look up specific topics (e.g., "interview tips," "career change advice," "entry-level jobs").</li>
                  <li style={{ '--li-index': 2 }}>Read <b>top upvoted posts</b> to find helpful discussions.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 2 }}>
                <strong>Ask Questions & Get Community Input:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Click <b>Create a Post</b> to ask for advice on resumes, job applications, or career transitions.</li>
                  <li style={{ '--li-index': 2 }}>Be <b>specific</b> in your question (e.g., "How can I improve my software engineering resume?") for better responses.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 3 }}>
                <strong>Engage with Industry Professionals:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Many professionals and recruiters share insights—look for <b>"Hiring Managers"</b> or <b>experienced users</b> responding to posts.</li>
                  <li style={{ '--li-index': 2 }}>If a response is particularly helpful, follow up with additional questions.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 4 }}>
                <strong>Be Mindful of Advice Quality:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Since Reddit is an open forum, verify advice with <b>official career websites</b> or <b>CMU resources</b> before acting on it.</li>
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
                  <li style={{ '--li-index': 1 }}>Use the <b>appointment booking system</b> to schedule one-on-one career advising.</li>
                  <li style={{ '--li-index': 2 }}>Choose between resume reviews, interview prep, or general career guidance.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 2 }}>
                <strong>Practice for Interviews:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Explore <b>mock interview sessions</b> available through CMU's career services.</li>
                  <li style={{ '--li-index': 2 }}>Review common interview questions and strategies listed on the site.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 3 }}>
                <strong>Attend Career Development Events:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Look for <b>career fairs</b>, <b>employer talks</b>, and <b>networking sessions</b>.</li>
                  <li style={{ '--li-index': 2 }}>Register for <b>industry-specific webinars</b> to stay updated on hiring trends.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 4 }}>
                <strong>Leverage Alumni & Employer Connections:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Use the <b>INI's network</b> to find mentors, internship opportunities, and job leads.</li>
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
                  <li style={{ '--li-index': 1 }}>Review available <b>therapy services</b>, including <b>individual counseling</b> and <b>group sessions</b>.</li>
                  <li style={{ '--li-index': 2 }}>Identify whether you need <b>in-person or virtual sessions</b> based on availability.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 2 }}>
                <strong>Utilize Mindfulness & Stress-Relief Tools:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>Access CMU's <b>guided meditation resources</b>, <b>stress-reduction exercises</b>, and <b>mental health workshops</b>.</li>
                  <li style={{ '--li-index': 2 }}>Consider attending <b>mindfulness sessions</b> or <b>wellness events</b> to develop relaxation techniques.</li>
                </ul>
              </li>
              <li style={{ '--li-index': 3 }}>
                <strong>Find Immediate Support If Needed:</strong>
                <ul>
                  <li style={{ '--li-index': 1 }}>If experiencing high stress, anxiety, or depression, use CMU's <b>crisis support options</b> listed on the site.</li>
                  <li style={{ '--li-index': 2 }}>Contact CMU's <b>mental health professionals</b> for direct assistance.</li>
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