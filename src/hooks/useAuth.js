import { useState } from "react";
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
      navigate("/admin"); // Chuyển hướng sau khi đăng nhập
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Sai tài khoản hoặc mật khẩu!");
    }
  };

  return { handleLogin, errorMessage };
};
