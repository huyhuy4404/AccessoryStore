import React from "react";

const Button = ({ type = "button", variant, icon, onClick }) => {
  const getButtonClass = () => {
    switch (variant.toLowerCase()) {
      case "submit":
        return "btn btn-primary";
      case "login":
        return "btn btn-primary";
      case "cancel":
        return "btn btn-danger";
      case "back":
        return "btn btn-secondary";
      case "register":
        return "btn btn-success";
      default:
        return "btn btn-light";
    }
  };

  const getButtonText = () => {
    switch (variant) {
      case "submit":
        return "Submit";
      case "login":
        return "Login";
      case "cancel":
        return "Cancel";
      case "back":
        return "Back";
      case "register":
        return "Register";
      default:
        return "Button";
    }
  };

  return (
    <button
      type={type}
      className={`${getButtonClass()} w-100 fw-bold py-2 d-flex align-items-center justify-content-center gap-2`}
      onClick={onClick}
    >
      {icon && <i className={icon}></i>}
      {getButtonText()}
    </button>
  );
};

export default Button;
