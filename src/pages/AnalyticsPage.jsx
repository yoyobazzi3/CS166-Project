import React, { useState, useEffect } from 'react';
import './AnalyticsPage.css';

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
    unique: 0
  });
  const [chartData, setChartData] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics');
      const data = await response.json();
      
      if (data.success) {
        setStats(data.stats);
        setChartData(data.chartData);
        setRecentUsers(data.recentUsers);
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch analytics data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getMaxCount = () => {
    return Math.max(...chartData.map(d => d.count), 1);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading analytics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <p className="error-title">Error</p>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <main className="analytics-container">
      {/* Header */}
      <header className="analytics-header-modern">
        <div className="header-content">
          <h1>Security Awareness Dashboard</h1>
          <p>Real-time phishing campaign metrics and user engagement analytics</p>
        </div>
      </header>

      <div className="analytics-content">
        {/* Metrics Grid */}
        <div className="metrics-grid-modern">
          <div className="metric-card-modern">
            <div className="metric-accent"></div>
            <div className="metric-header">
              <div className="metric-icon"></div>
              <div className="metric-label">TOTAL CLICKS</div>
            </div>
            <div className="metric-value">{stats.total}</div>
            <p className="metric-description">Total clicks captured</p>
            <div className="metric-progress">
              <div className="metric-progress-bar"></div>
            </div>
          </div>

          <div className="metric-card-modern">
            <div className="metric-accent accent-2"></div>
            <div className="metric-header">
              <div className="metric-icon"></div>
              <div className="metric-label">TODAY'S CLICKS</div>
            </div>
            <div className="metric-value">{stats.today}</div>
            <p className="metric-description">Clicks in the last 24 hours</p>
            <div className="metric-progress">
              <div className="metric-progress-bar"></div>
            </div>
          </div>

          <div className="metric-card-modern">
            <div className="metric-accent accent-3"></div>
            <div className="metric-header">
              <div className="metric-icon"></div>
              <div className="metric-label">THIS WEEK</div>
            </div>
            <div className="metric-value">{stats.thisWeek}</div>
            <p className="metric-description">Clicks in the last 7 days</p>
            <div className="metric-progress">
              <div className="metric-progress-bar"></div>
            </div>
          </div>

          <div className="metric-card-modern">
            <div className="metric-accent accent-4"></div>
            <div className="metric-header">
              <div className="metric-icon"></div>
              <div className="metric-label">UNIQUE USERS</div>
            </div>
            <div className="metric-value">{stats.unique}</div>
            <p className="metric-description">Distinct users who clicked</p>
            <div className="metric-progress">
              <div className="metric-progress-bar"></div>
            </div>
          </div>
        </div>

        {/* Activity Chart */}
        <div className="chart-card-modern">
          <div className="chart-header">
            <h2>Activity Over Last 7 Days</h2>
            <p>Daily click volume and engagement</p>
          </div>
          
          {chartData.length === 0 ? (
            <div className="no-chart-data">No data available</div>
          ) : (
            <div className="chart-container-modern">
              {chartData.map((data, index) => (
                <div key={index} className="chart-bar-group">
                  <div className="chart-bar-area">
                    <div 
                      className="chart-bar-modern"
                      style={{ 
                        height: `${(data.count / getMaxCount()) * 100}%`,
                        minHeight: data.count > 0 ? '8px' : '2px'
                      }}
                    >
                      {data.count > 0 && (
                        <span className="bar-value-modern">{data.count}</span>
                      )}
                    </div>
                  </div>
                  <span className="chart-label-modern">{data.date}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="recent-card-modern">
          <div className="recent-header">
            <h2>Recent Activity</h2>
            <p>Last 10 user submissions</p>
          </div>

          {recentUsers.length === 0 ? (
            <div className="no-recent-data">No submissions yet</div>
          ) : (
            <div className="recent-list-modern">
              {recentUsers.map((user, index) => (
                <div key={index} className="recent-item-modern">
                  <div className="recent-left">
                    <div className="recent-number">{index + 1}</div>
                    <div className="recent-info">
                      <p className="recent-id">{user.sjsuId}</p>
                      <p className="recent-subtitle">SJSU Student ID</p>
                    </div>
                  </div>
                  <div className="recent-time">
                    <p className="recent-date">{new Date(user.createdAt).toLocaleDateString()}</p>
                    <p className="recent-clock">
                      {new Date(user.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}