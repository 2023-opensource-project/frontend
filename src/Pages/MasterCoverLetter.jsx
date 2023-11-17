import React from "react";
import styled from "styled-components";
import { Inner } from "../Constants/style";
import TitleContainer from "../MasterCoverLetterComponents/TitleContainer";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function MasterCoverLetter() {
  return (
    <Container>
      <Inner>
        <TitleContainer />
      </Inner>
    </Container>
  );
}

export default MasterCoverLetter;
