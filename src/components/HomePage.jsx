// src/HomePage.jsx
import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>A supportive community for people dealing with job rejections.</p>

      <h2>How to Use This Website</h2>
      <p>Select the section that best matches your situation:</p>
      <ul>
        <li>If this is your first rejection, visit <strong>First Job Rejection</strong>.</li>
        <li>If you were rejected from your dream job, check out <strong>Rejection from Your Dream Job</strong>.</li>
        <li>If you’re facing multiple rejections, learn more under <strong>Facing Multiple Rejections</strong>.</li>
      </ul>

      <h2>General Tips for Overcoming Rejection</h2>
      <ul>
        <li>Practice self-care and prioritize your mental health.</li>
        <li>Foster a growth mindset and learn from each experience.</li>
        <li>Stay proactive and take consistent action towards your goals.</li>
        <li>Maintain a supportive network of friends, family, and mentors.</li>
        <li>Celebrate your successes along the way.</li>
      </ul>
    </div>
  );
}

export default HomePage;