import "./loginForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// React icons
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  // User Login handler
  const loginFormSubmissionHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="loginFormCont">
      {/* Login Form Header */}
      <div className="loginFormHdr">
        <h1>Login</h1>
      </div>

      {/* login Form */}
      <form
        action="#"
        className="loginForm"
        onSubmit={(e) => {
          if (email && password) {
            loginFormSubmissionHandler(e);
          }
        }}>
        {/* Form Fieldset */}
        <fieldset className="formFieldset">
          {/* For Email */}
          <div className="loginInputFieldArea">
            <input
              type="email"
              id="email"
              className="loginInputField"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="loginInputLabel"
              style={
                email
                  ? { transform: "translateY(-110%)", fontSize: "0.85rem" }
                  : { transform: "translateY(0%)", fontSize: "0.98rem" }
              }>
              Email Address
            </label>
          </div>

          {/* For Password */}
          <div className="loginInputFieldArea">
            <input
              type={isShowPassword ? "text" : "password"}
              id="password"
              className="loginInputField"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className="loginInputLabel"
              style={
                password
                  ? { transform: "translateY(-110%)", fontSize: "0.85rem" }
                  : { transform: "translateY(0%)", fontSize: "0.98rem" }
              }>
              Password
            </label>
            <span className="eyeIcon">
              {isShowPassword ? (
                <FaEye
                  style={{ cursor: "pointer", color: "#444", fontSize: "16px" }}
                  onClick={() => setIsShowPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  style={{ cursor: "pointer", color: "#444", fontSize: "16px" }}
                  onClick={() => setIsShowPassword(true)}
                />
              )}
            </span>
          </div>
        </fieldset>

        {/* Additional Options */}
        <div className="additionalOption">
          <div className="rememberMeSide">
            <input type="checkbox" name="forgotPassword" id="forgotPassword" />
            <span className="rememberMe">Remember Me</span>
          </div>
          <span className="forgotPassword">Forgot Password ?</span>
        </div>

        {/* login Button */}
        <button
          disabled={email && password ? false : true}
          style={
            email && password
              ? { backgroundColor: "#007ccf", cursor: "pointer" }
              : { backgroundColor: "#666", cursor: "not-allowed" }
          }
          className="loginButton">
          Login
        </button>
      </form>

      {/* OR */}
      <div className="horizontalLine">
        <span></span>
        <span>OR</span>
        <span></span>
      </div>

      {/* Sign up with Google Button */}
      <button className="googleLoginBtn">
        <img src="/assets/googleLogo.png" alt="Google" />
        Sign in with Google
      </button>

      {/* Suggestion If you have already an account */}
      <span className="registerSuggestion">
        If you don't have an account?{" "}
        <Link to="/register" style={{ textDecoration: "none" }}>
          <strong className="signupLink">Sign up</strong>
        </Link>
      </span>
    </div>
  );
};

export default LoginForm;
