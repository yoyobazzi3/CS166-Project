import React, { useState } from "react";
import sjsulogo from "../assets/sjsulogo.png";
import CanvasLogo from "../assets/CanvasLogo.png";
import notVisible from "../assets/visibility_off.svg";
import visible from "../assets/visibility.svg";
import "./loginpage.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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

            <form>
              <div className="lp-form-group">
                <label>SJSU ID Number</label>
                <div className="lp-hint">#########</div>
                <input type="text" />
              </div>

              <div className="lp-form-group">
                <label>Password</label>
                <div className="lp-hint">SJSUOne Password</div>
                <div className="lp-password-row">
                  <input type={showPassword ? "text" : "password"} />
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
    </div>
  );
}
