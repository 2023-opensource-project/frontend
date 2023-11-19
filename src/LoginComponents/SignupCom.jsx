import React from "react";
import { Title, Button } from "../Constants/style";
import { Container, Input } from "../LoginComponents/LoginCom.style";

function SignupCom({ handleLoginSubmit, name, handleNameChange, id, handleIdChange, password, handlePasswordChange }) {
  return (
    <Container>
      <Title style={{ margin: "0" }}>회원가입</Title>
      <form onSubmit={handleLoginSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <Input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
        <Input type="text" placeholder="ID" value={id} onChange={handleIdChange} />
        <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <Button type="submit" width="calc(<Input>)" height="35px" margin="20px 0 0 0 ">
          회원가입
        </Button>
      </form>
    </Container>
  );
}

export default SignupCom;
