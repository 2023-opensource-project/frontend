import React from "react";
import { Title, Button } from "../Constants/style";
import { Container, Input, SignupLink } from "../LoginComponents/LoginCom.style";

function LoginCom({ handleLoginSubmit, id, handleIdChange, password, handlePasswordChange }) {
  return (
    <Container>
      <Title style={{ margin: "0" }}>로그인</Title>
      <form onSubmit={handleLoginSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <Input type="text" placeholder="ID" value={id} onChange={handleIdChange} />
        <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <Button type="submit" width="calc(<Input>)" height="35px" margin="20px 0 0 0 ">
          로그인
        </Button>
      </form>
      <SignupLink to="/signup">[회원가입]</SignupLink>
    </Container>
  );
}

export default LoginCom;
