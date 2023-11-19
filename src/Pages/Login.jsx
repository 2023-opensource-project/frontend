import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCom from "../LoginComponents/LoginCom";

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <LoginCom
      handleLoginSubmit={handleLoginSubmit}
      id={id}
      handleIdChange={handleIdChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
    />
  );
}

export default Login;
