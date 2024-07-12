import React from "react";
import "./login.css";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="lContainerLogin">
          <div className="lcLoginLogo">
            <img src="White-2.png" alt="" />
          </div>
          <h2>Enter your email</h2>
          <div className="loginForm">
            <div className="emailForm">
              <label htmlFor="emailInput">Email</label>
              <input type="text" id="emailInput" autoComplete="off" />
            </div>
            <div className="passwordForm">
              <div className="passwordLabelLink">
                <label htmlFor="passwordInput">Password</label>
                <a href="/register">Forgot your password?</a>
              </div>
              <input type="text" id="passwordInput" autoComplete="off" />
            </div>
            <button>Login</button>
            <div className="loginToRegister">
              <span>
                Don't have an account? <a href="/register">Join</a>
              </span>
            </div>
          </div>
        </div>
        <div className="lContainerBlank">
          <a href="/">
            <FontAwesomeIcon icon={faCircleXmark} />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
