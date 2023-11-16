import React from "react";
import styled from "styled-components";
import { Inner } from "../Constants/style.jsx";
import SecondSections from "../MasterResumeComponents/SecondSections.jsx";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function MasterResume() {
  return (
    <Container>
      <Inner>
        <SecondSections />
      </Inner>
    </Container>
  );
}

export default MasterResume;
