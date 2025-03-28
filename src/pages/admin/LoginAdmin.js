import { useState } from "react";
import {
  useAuth,
  usePasswordValidation,
  useEmailValidation,
} from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import ErrorMessage from "../../components/errors/ErrorMessage";

function LoginAdmin() {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const { error, validatePassword } = usePasswordValidation();
  const [isLogin, setIsLogin] = useState(true);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { email: registerEmail, setEmail: setRegisterEmail, emailError } = useEmailValidation();
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    await handleLogin(identifier, password, navigate);
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    if (registerPassword !== confirmPassword) {
      validatePassword(registerPassword, confirmPassword);
      return;
    }

    console.log("Register:", {
      registerEmail,
      registerUsername,
      registerPassword,
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 background-web">
      <div className={`${isLogin ? "" : "flipped"}`} style={{ width: "450px" }}>
        <div className="row">
          <div
            className={`col-6 text-center p-2 ${isLogin ? "active-tab" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            <button className="active-login">Sign In</button>
          </div>
          <div
            className={`col-6 text-center p-2 ${!isLogin ? "active-tab" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            <button className="active-login">Sign Up</button>
          </div>
        </div>

        <div className="login-container">
          <div className={`flip-card ${isLogin ? "" : "flipped"}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3 className="text-center">Admin Login</h3>
                <form onSubmit={onSubmitLogin} className="p-4 rounded">
                  <InputField
                    label="Username or Email"
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Enter your username or email"
                    icon="bi-person"
                  />

                  <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    icon="bi-lock"
                  />

                  <Button
                    type="submit"
                    variant="login"
                    icon="bi bi-box-arrow-in-right"
                  />
                </form>
              </div>
              <div className="flip-card-back">
                <h3 className="text-center">Register</h3>
                <form onSubmit={onSubmitRegister} className="p-4">
                  <InputField
                    label="Email"
                    type="email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    placeholder="Enter your email"
                    icon="bi-envelope"
                  />
                  {emailError && (
                    <small className="text-danger">{emailError}</small>
                  )}
                  <InputField
                    label="Username"
                    type="text"
                    value={registerUsername}
                    onChange={(e) => setRegisterUsername(e.target.value)}
                    placeholder="Choose a username"
                    icon="bi-person"
                  />

                  <InputField
                    label="Password"
                    type="password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    placeholder="Create a password"
                    icon="bi-lock"
                  />
                  <InputField
                    label="Confirm password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                    icon="bi-lock"
                  />
                  <ErrorMessage message={error} />
                  <Button
                    type="submit"
                    variant="register"
                    icon="bi bi-person-plus me-2"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
