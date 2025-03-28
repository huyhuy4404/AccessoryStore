import React, { useState } from "react";

const InputField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  icon,
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="mb-3">
      <label className="form-label fw-bold">{label}</label>
      <div className="input-group">
        {icon && (
          <span className="input-group-text bg-light">
            <i className={`bi ${icon} text-primary`}></i>
          </span>
        )}
        <input
          type={inputType}
          className="form-control"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
        {type === "password" && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
