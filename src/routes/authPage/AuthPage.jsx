import React from "react";
import "./authPage.css";

export default function AuthPage() {
  return (
    <div className="login-container">
      <h2 className="login-title">Welcome to Pinterest</h2>

      {/* Email */}
      <div className="form-group">
        <input type="email" placeholder="Email" />
      </div>

      {/* Password */}
      <div className="form-group password-group">
        <input type="password" placeholder="Password" />
        <span className="toggle-password">👁️</span>
      </div>

      <a href="#" className="forgot-link">
        Forgot your password?
      </a>

      <button className="login-btn">Log in</button>

      <div className="divider">OR</div>

      {/* Google login */}
      <button className="google-btn">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          // alt="Google"
        />
        Continue with Google
      </button>

      {/* QR Code login */}
      <button className="qr-btn">📷 Use QR code</button>

      <p className="note">Facebook login is no longer available</p>
      <p className="sub-link">Update login method</p>

      <p className="signup-text">
        Not on Pinterest yet? <a href="#">Sign up</a>
      </p>
      <p className="signup-text">
        Are you a business? <a href="#">Get started here!</a>
      </p>

      <p className="terms">
        By continuing, you agree to Pinterest's{" "}
        <a href="#">Terms of Service</a> and acknowledge you've read our{" "}
        <a href="#">Privacy Policy</a>. <a href="#">Notice at collection</a>.
      </p>
    </div>
  );
}
