import "./EducationPage.css"

export default function EducationPage() {
  return (
    <div className="edu-container">
      <div className="edu-card">
        <div className="edu-alert-box">
          <h2>This Was a Phishing Simulation</h2>
          <p>
            No actual data was collected. This demonstration shows how phishing attacks work and how to protect
            yourself.
          </p>
        </div>

        <div className="edu-content">
          <h3>What Happened?</h3>
          <p>
            You just interacted with a simulated phishing page. In a real attack, any credentials entered could have
            been compromised. This simulation was created for educational purposes to demonstrate common phishing
            techniques.
          </p>

          <h3>Phishing vs Legitimate Email</h3>
          <p>Learn to spot the differences between phishing attempts and legitimate communications:</p>

          <div className="email-comparison-grid">
            {/* Phishing Email */}
            <div className="email-card phishing-email">
              <div className="email-badge phishing-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Phishing Email
              </div>

              <h4 className="email-title">Urgent: Your Account Will Be Suspended</h4>
              <p className="email-from">From: security@paypa1-support.com</p>

              <div className="email-body">
                <p>Dear Valued Customer,</p>
                <p>
                  We detected unusual activity on your account. Click here immediately to verify your identity or your
                  account will be suspended within 24 hours.
                </p>
                <button className="email-button phishing-button">Verify Account Now</button>
              </div>

              <div className="email-warnings">
                <div className="warning-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <div>
                    <strong>Suspicious sender:</strong> <span>Note the "1" instead of "l" in paypal</span>
                  </div>
                </div>
                <div className="warning-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <div>
                    <strong>Creates urgency:</strong> <span>Threatens account suspension</span>
                  </div>
                </div>
                <div className="warning-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <div>
                    <strong>Generic greeting:</strong> <span>No personalization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legitimate Email */}
            <div className="email-card legitimate-email">
              <div className="email-badge legitimate-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 12 15 16 10" />
                </svg>
                Legitimate Email
              </div>

              <h4 className="email-title">Your Monthly Statement is Ready</h4>
              <p className="email-from">From: notifications@bank.com</p>

              <div className="email-body">
                <p>Hello John Smith,</p>
                <p>
                  Your monthly statement for account ending in 4523 is now available. Log in to your account through our
                  website or mobile app to view it.
                </p>
                <p className="email-disclaimer">
                  This is an automated message. Please do not click links in emails - always navigate to our website
                  directly.
                </p>
              </div>

              <div className="email-checks">
                <div className="check-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 12 15 16 10" />
                  </svg>
                  <div>
                    <strong>Verified sender:</strong> <span>Legitimate domain</span>
                  </div>
                </div>
                <div className="check-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 12 15 16 10" />
                  </svg>
                  <div>
                    <strong>Personalized:</strong> <span>Uses your name and account details</span>
                  </div>
                </div>
                <div className="check-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 12 15 16 10" />
                  </svg>
                  <div>
                    <strong>No pressure:</strong> <span>Informational, not urgent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
            <li>
              <strong>Verify URLs:</strong> Always check that you're on the correct domain before entering credentials
            </li>
            <li>
              <strong>Use Multi-Factor Authentication:</strong> Adds an additional layer of security beyond passwords
            </li>
            <li>
              <strong>Avoid clicking email links:</strong> Navigate to websites directly by typing the URL
            </li>
            <li>
              <strong>Question urgency:</strong> Legitimate organizations rarely threaten immediate account closure
            </li>
            <li>
              <strong>Report suspicious activity:</strong> Forward phishing emails to your IT security team
            </li>
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
              identity theft, financial loss, and unauthorized access to your accounts. When in doubt, contact the
              organization directly through official channels.
            </p>
          </div>

          <div className="edu-footer-section">
            <a href="/" className="edu-button">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
