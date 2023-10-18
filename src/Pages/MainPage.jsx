import React from "react";
import styled from "styled-components";
import MainFirstSection from "../Components/MainFirstSection";
import MainSecondSection from "../Components/MainSecondSection";

export const Section0 = styled.div`
  background-color: #fcf7ff;
  height: 60px;
  border-bottom: 1px solid #dedede;
`;

function MainPage() {
  return (
    <div>
      <Section0>Logo</Section0>
      <MainFirstSection />
      <MainSecondSection />
    </div>
  );
}

export default MainPage;
