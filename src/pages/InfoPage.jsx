import React from "react";
import { useNavigate } from "react-router-dom";
import "./InfoPage.css";

export default function InfoPage() {
  const navigate = useNavigate();

  return (
    <div className="info-root">
      <h1 className="info-title">Project Information</h1>

      <p className="info-text">
        This website is a <strong>student project</strong> created for educational
        purposes only. It is NOT an official SJSU, Canvas, or Okta website.
      </p>

      <p className="info-text">
        Do NOT use real university credentials. Any data entered is stored only
        for demonstration/testing.
      </p>

      <button 
        className="info-button"
        onClick={() => navigate("/login")}
      >
        Continue to Login →
      </button>
    </div>
  );
}
