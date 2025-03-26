import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginAdmin() {
  const { handleLogin
    // , errorMessage 
  } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [verificationCode, setVerificationCode] = useState("");
  // const [sentCode, setSentCode] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(identifier, password,navigate);
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 background-web">
      <div
        className={`${
          isLogin ? "" : "flipped"
        }`}
        style={{ width: "450px" }}
      >
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
              {/* Form Đăng nhập */}
              <div className="flip-card-front">
                <h3 className="text-center">Admin Login</h3>
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Username or Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      required
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
              </div>

              {/* Form Đăng ký */}
              <div className="flip-card-back">
                <h3 className="text-center">Register</h3>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      placeholder="Choose a username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      placeholder="Create a password"
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Register
                  </button>
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
