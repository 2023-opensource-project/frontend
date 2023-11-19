import React from "react";
import { Container, Inner } from "../Constants/style";
import CompanySelection from "../CoverLetter/CompanySelection";

function CoverLetter() {
  return (
    <Container>
      <Inner>
        <CompanySelection />
      </Inner>
    </Container>
  );
}

export default CoverLetter;
