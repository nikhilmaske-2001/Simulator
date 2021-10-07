import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">Simulator</div>
          <span className="loginDesc"> Play with 0% risk</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Login In</button>
            <span className="loginForgot"> Forgot Password ?</span>
            <button className="loginRegisterButton">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
