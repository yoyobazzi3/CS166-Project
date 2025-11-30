import React from 'react';
import './EducationPage.css';

export default function EducationPage() {
  return (
    <div className="edu-container">
      <div className="edu-card">
        <div className="edu-alert-box">
          <h2>This Was a Phishing Simulation</h2>
          <p>No actual data was collected. This demonstration shows how phishing attacks work and how to protect yourself.</p>
        </div>

        <div className="edu-content">
          <h3>What Happened?</h3>
          <p>
            You just interacted with a simulated phishing page. In a real attack, any credentials entered could have been compromised. 
            This simulation was created for educational purposes to demonstrate common phishing techniques.
          </p>

          <h3>Warning Signs to Watch For:</h3>
          <ul>
            <li>Suspicious or misspelled URLs in the address bar</li>
            <li>Urgent language designed to create panic</li>
            <li>Requests for login credentials via email links</li>
            <li>Poor grammar or unprofessional formatting</li>
            <li>Threats of account suspension or closure</li>
          </ul>

          <h3>Best Practices for Account Security:</h3>
          <ul>
            <li><strong>Verify URLs:</strong> Always check that you're on the correct domain before entering credentials</li>
            <li><strong>Use Multi-Factor Authentication:</strong> Adds an additional layer of security beyond passwords</li>
            <li><strong>Avoid clicking email links:</strong> Navigate to websites directly by typing the URL</li>
            <li><strong>Question urgency:</strong> Legitimate organizations rarely threaten immediate account closure</li>
            <li><strong>Report suspicious activity:</strong> Forward phishing emails to your IT security team</li>
          </ul>

          <h3>Phishing Statistics:</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <strong>73%</strong>
              <span>of adults have experienced online scams or phishing attempts</span>
            </div>
            <div className="stat-item">
              <strong>90%</strong>
              <span>of data breaches originate from phishing attacks</span>
            </div>
            <div className="stat-item">
              <strong>$12.5 billion</strong>
              <span>lost annually to phishing scams in the United States</span>
            </div>
          </div>

          <div className="info-box">
            <h4>Remember</h4>
            <p>
              Always verify before you trust. Taking a moment to confirm the legitimacy of a request can prevent 
              identity theft, financial loss, and unauthorized access to your accounts. When in doubt, contact 
              the organization directly through official channels.
            </p>
          </div>

          <div className="edu-footer-section">
            <button className="edu-button" onClick={() => window.location.href = '/'}>
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}