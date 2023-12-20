import "./loginPage.css";

// Component
import LoginForm from "../../components/login-form/LoginForm";

const Login = () => {
  return (
    <div className="loginPageCont">
      <div className="loginPageWrapper">
        {/* Login Form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
