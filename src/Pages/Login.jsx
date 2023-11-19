import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCom from "../LoginComponents/LoginCom";

function Login({ users }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.id === id && user.password === password);
    if (user) {
      navigate("/");
    } else {
      setErrorMessage("아이디 또는 비밀번호를 확인하세요.");
    }
  };

  return (
    <LoginCom
      handleLoginSubmit={handleLoginSubmit}
      id={id}
      handleIdChange={handleIdChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
      errorMessage={errorMessage}
    />
  );
}

export default Login;
