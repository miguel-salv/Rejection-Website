import React from 'react';
import '../../styles/footer.css';
import studentProjectLogo from '../../images/cmu_logo.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="notice-text-container">
          <p className="student-project-notice">This is a student-created project and is not officially affiliated with Carnegie Mellon University.</p>
          <p className="copyright">© {new Date().getFullYear()} Miguel Salvacion</p>
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
    </footer>
  );
}

export default Footer;