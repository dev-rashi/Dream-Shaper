import React, { useState } from "react";
import './LoginSignup.css';

// import user_icon from '../Assets/person.png';
// import email_icon from '../Assets/email.png';
// import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            {/* <img src={user_icon} alt="User Icon" /> */}
            <input placeholder="Name" type="text" />
          </div>
        )}
        <div className="input">
          {/* <img src={email_icon} alt="Email Icon" /> */}
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          {/* <img src={password_icon} alt="Password Icon" /> */}
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" && (
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;