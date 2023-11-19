import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupCom from "../LoginComponents/SignupCom";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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
    <SignupCom
      handleLoginSubmit={handleLoginSubmit}
      name={name}
      handleNameChange={handleNameChange}
      id={id}
      handleIdChange={handleIdChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
    />
  );
}

export default Login;
