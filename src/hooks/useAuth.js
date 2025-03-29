import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAuth = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (identifier, password) => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        identifier,
        password,
      });

      console.log("✅ Đăng nhập thành công:", response.data);
      navigate("/admin");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Sai tài khoản hoặc mật khẩu!");
    }
  };

  return { handleLogin, errorMessage };
};

export const usePasswordValidation = () => {
  const [error, setError] = useState("");

  const validatePassword = (password, confirmPassword) => {
    if (confirmPassword && password !== confirmPassword) {
      setError("Password and confirm password do not match!");
    } else {
      setError("");
    }
  };

  return { error, validatePassword };
};
export const useEmailValidation = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError("Invalid email format!");
      } else {
        setEmailError("");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [email]);

  return { email, setEmail, emailError };
};