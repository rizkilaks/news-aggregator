import React from "react";
import "./register.css";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  return (
    <div>
      <div className="register">
        <div className="lContainerRegister">
          <div className="lcRegisterLogo">
            <img src="White-2.png" alt="" />
          </div>
          <h2>Join Wor.ld Media</h2>
          <div className="registerForm">
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
            <button>Register</button>
            <div className="registerToRegister">
              <span>
                Already have an account? <a href="/login">Login</a>
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

export default Register;
