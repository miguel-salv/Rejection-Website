import React from 'react';
import multipleRejectionsImage from '../images/multiple-rejections.svg';

function MultipleRejections() {
  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Facing Multiple Rejections? Build Your Resilience</h1>
            <p>
              It's not uncommon for college students to encounter multiple rejections, especially during the competitive internship or entry-level job search. After sending out countless applications and attending interviews, it's easy to feel disheartened. However, persistence and adaptability are crucial skills that will serve you throughout your career. Every rejection is a stepping stone toward finding the right opportunity that aligns with your goals.
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
      <ul>
        <li style={{ '--li-index': 1 }}>
          <strong>Refine Your Application Strategy</strong>
          <p>
            Instead of applying to every position that remotely matches your skills, focus on quality over quantity. Tailor each resume and cover letter to the specific job description. Highlight key achievements from internships, projects, or leadership roles that demonstrate your qualifications.
          </p>
          <p>
            Take time to research the companies and ensure that your application reflects your understanding of their values, mission, and current needs.
          </p>
        </li>
        <li style={{ '--li-index': 2 }}>
          <strong>Seek Feedback from Rejections</strong>
          <p>
            After an interview, don't hesitate to ask for constructive feedback. Learning what went wrong—or what could be improved—will help you perform better in future applications.
          </p>
          <p>
            Reach out to alumni or mentors in your network who may have gone through similar experiences. They can provide insight into how they navigated rejection and found success.
          </p>
        </li>
        <li style={{ '--li-index': 3 }}>
          <strong>Develop New Skills and Strengthen Weak Areas</strong>
          <p>
            Identify patterns in your rejections. Are there particular skills or qualifications that you're consistently lacking? Use this insight to develop new expertise, either through online courses, certifications, or attending workshops specific to your industry.
          </p>
          <p>
            Engage in side projects or volunteer work related to your field. Not only does this demonstrate initiative and passion, but it also gives you more material to enhance your portfolio.
          </p>
        </li>
        <li style={{ '--li-index': 4 }}>
          <strong>Maintain a Strong Support System</strong>
          <p>
            It's easy to feel isolated when faced with multiple rejections, but it's important to lean on your friends, family, and college career resources. Stay connected with your peers who are also going through the job search process. Sharing your challenges and successes can help ease the mental burden.
          </p>
          <p>
            Many campuses have mental health services that can offer counseling and support to help you stay mentally resilient during tough times.
          </p>
        </li>
        <li style={{ '--li-index': 5 }}>
          <strong>Stay Active and Focused</strong>
          <p>
            It's important to maintain momentum during your search. Set small, achievable goals for yourself, such as applying to three high-quality positions per week or attending a networking event every month. Keeping active will prevent feelings of stagnation.
          </p>
          <p>
            Don't let rejections define your self-worth. Practice self-care, whether it's through exercise, mindfulness, or pursuing hobbies outside of your job search. Maintaining a healthy balance will keep you energized and ready for the right opportunity when it comes.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default MultipleRejections;