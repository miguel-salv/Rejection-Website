import React from 'react';
import '../../styles/footer.css';
import studentProjectLogo from '../../images/cmu_logo.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-branding">
          <div className="logo-notice-wrapper">
            <img 
              src={studentProjectLogo} 
              alt="Student Project Logo" 
              className="footer-logo"
            />
            <div className="notice-text-container">
              <p className="student-project-notice">This is a student-created project and is not officially affiliated with Carnegie Mellon University.</p>
              <p className="copyright">© {new Date().getFullYear()} Miguel Salvacion</p>
            </div>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h4>Useful CMU Links</h4>
            <ul>
              <li><a href="https://www.cmu.edu/career/" target="_blank" rel="noopener noreferrer">CPDC</a></li>
              <li><a href="https://www.cmu.edu/counseling/" target="_blank" rel="noopener noreferrer">CaPS</a></li>
              <li><a href="https://www.cmu.edu/student-affairs/" target="_blank" rel="noopener noreferrer">Student Affairs</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://www.cmu.edu/career/students-and-alumni/" target="_blank" rel="noopener noreferrer">Career Resources</a></li>
              <li><a href="https://www.cmu.edu/policies/" target="_blank" rel="noopener noreferrer">University Policies</a></li>
              <li><a href="https://www.cmu.edu/hr/" target="_blank" rel="noopener noreferrer">Human Resources</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Creator</h4>
            <ul>
              <li><a href="mailto:msalvaci@andrew.cmu.edu" target="_blank" rel="noopener noreferrer">Email</a></li>
              <li><a href="https://github.com/miguel-salv" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://www.linkedin.com/in/miguel-salv/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;