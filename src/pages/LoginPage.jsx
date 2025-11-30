import React, { useState } from "react";
import sjsulogo from "../assets/sjsulogo.png";
import CanvasLogo from "../assets/CanvasLogo.png";
import notVisible from "../assets/visibility_off.svg";
import visible from "../assets/visibility.svg";
import "./LoginPage.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [sjsuId, setSjsuId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sjsuId: sjsuId,
          password: password,
        }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (data.success) {
        setSuccess("Account created successfully!");
        setSjsuId("");
        setPassword("");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to connect to server");
    }
  };

  return (
    <div className="lp-root">
      <div className="lp-page-header">
        <div className="lp-header-row">
          Connecting to
          <img src={CanvasLogo} alt="Canvas Logo" className="canvas-logo" />
        </div>

        <span>Sign in with your account to access Canvas LMS</span>
      </div>

      

      <div className="lp-card-wrapper">
        <div className="lp-card">
          <div className="lp-card-header">
            <img src={sjsulogo} alt="SJSU Logo" className="lp-logo-img" />
          </div>

          <div className="lp-card-body">
            <h2 className="sign-in">Sign In</h2>

            {error && (
              <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
            )}
            {success && (
              <div style={{ color: "green", marginBottom: "10px" }}>
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="lp-form-group">
                <label>SJSU ID Number</label>
                <div className="lp-hint">#########</div>
                <input
                  type="text"
                  value={sjsuId}
                  onChange={(e) => setSjsuId(e.target.value)}
                  required
                />
              </div>

              <div className="lp-form-group">
                <label>Password</label>
                <div className="lp-hint">SJSUOne Password</div>
                <div className="lp-password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <span
                    className="lp-show-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <img
                      src={showPassword ? visible : notVisible}
                      alt="toggle visibility"
                      className="visibility-icon"
                    />
                  </span>
                </div>
              </div>

              <div className="lp-checkbox-row">
                <input type="checkbox" id="keep-in" />
                <label htmlFor="keep-in">Keep me signed in</label>
              </div>

              <button type="submit" className="lp-btn-primary">
                Sign in
              </button>

              <div className="lp-links">
                <a href="#">Forgot password?</a>
                <a href="#">Unlock account?</a>
                <a href="#">Help</a>
              </div>

              <div className="lp-notice">
                <a href="#">
                  For Students, check your email for the Time, Place &amp;
                  Manner Training to complete today!
                </a>
              </div>

              <div className="lp-notice">
                <a href="#">
                  For Represented Employees, SJSU Freedom of Expression and
                  Time, Place and Manner Policy continues to be in effect.
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="lp-footer">
        <span>Powered by Okta</span>
        <a href="#" className="lp-footer-link">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
