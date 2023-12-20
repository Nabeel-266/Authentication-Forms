import "./registerPage.css";

// Component
import RegisterForm from "../../components/register-form/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="registerPageCont">
      <div className="registerPageWrapper">
        {/* RegisterForm Form */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
