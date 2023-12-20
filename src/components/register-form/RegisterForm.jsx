import "./registerForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// React icons
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const RegisterForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);

  // User Registration Handler
  const registerFormSubmissionHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="registerFormCont">
      {/* Register Form Heading */}
      <div className="registerFormHdr">
        <h1>Create Account</h1>
      </div>

      {/* Register Form */}
      <form
        action="#"
        className="registerForm"
        onSubmit={(e) => {
          if (fullname && email && password && confirmPass) {
            registerFormSubmissionHandler(e);
          }
        }}>
        {/* Form Fieldset */}
        <fieldset className="formFieldset">
          {/* For Fullname */}
          <div className="inputFieldArea">
            <input
              type="text"
              id="fullname"
              className="inputField"
              autoComplete="off"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
            <label
              htmlFor="fullname"
              className="inputLabel"
              style={
                fullname
                  ? { transform: "translateY(-110%)", fontSize: "0.8rem" }
                  : { transform: "translateY(0%)", fontSize: "0.95rem" }
              }>
              Full Name
            </label>
          </div>

          {/* For Email */}
          <div className="inputFieldArea">
            <input
              type="email"
              id="email"
              className="inputField"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="email"
              className="inputLabel"
              style={
                email
                  ? { transform: "translateY(-110%)", fontSize: "0.8rem" }
                  : { transform: "translateY(0%)", fontSize: "0.95rem" }
              }>
              Email Address
            </label>
          </div>

          {/* For Password */}
          <div className="inputFieldArea">
            <input
              type={isShowPassword ? "text" : "password"}
              id="password"
              className="inputField"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="password"
              className="inputLabel"
              style={
                password
                  ? { transform: "translateY(-110%)", fontSize: "0.8rem" }
                  : { transform: "translateY(0%)", fontSize: "0.95rem" }
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

          {/* For Confirm Password */}
          <div className="inputFieldArea">
            <input
              type={isShowConfirmPass ? "text" : "password"}
              id="confirmPassword"
              className="inputField"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            />
            <label
              htmlFor="confirmPassword"
              className="inputLabel"
              style={
                confirmPass
                  ? { transform: "translateY(-110%)", fontSize: "0.8rem" }
                  : { transform: "translateY(0%)", fontSize: "0.95rem" }
              }>
              Confirm Password
            </label>
            <span className="eyeIcon">
              {isShowConfirmPass ? (
                <FaEye
                  style={{ cursor: "pointer", color: "#444", fontSize: "16px" }}
                  onClick={() => setIsShowConfirmPass(false)}
                />
              ) : (
                <FaEyeSlash
                  style={{ cursor: "pointer", color: "#444", fontSize: "16px" }}
                  onClick={() => setIsShowConfirmPass(true)}
                />
              )}
            </span>
          </div>
        </fieldset>

        {/* Register Button */}
        <button
          disabled={fullname && email && password && confirmPass ? false : true}
          style={
            fullname && email && password && confirmPass
              ? { backgroundColor: "#007ccf", cursor: "pointer" }
              : { backgroundColor: "#666", cursor: "not-allowed" }
          }
          className="registerButton">
          Register
        </button>
      </form>

      {/* OR */}
      <div className="horizontalLine">
        <span></span>
        <span>OR</span>
        <span></span>
      </div>

      {/* Sign up with Google Button */}
      <span className="googleRegisterBtn">
        <img src="/assets/googleLogo.png" alt="Google" />
        Sign up with Google
      </span>

      {/* Suggestion If you have already an account */}
      <span className="loginSuggestion">
        If you have already an account?{" "}
        <Link to="/login" style={{ textDecoration: "none" }}>
          <strong className="signinLink">Sign in</strong>
        </Link>
      </span>
    </div>
  );
};

export default RegisterForm;
