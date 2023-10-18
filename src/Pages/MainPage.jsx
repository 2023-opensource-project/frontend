import React from "react";
import styled from "styled-components";
import MainFirstSection from "../Components/MainFirstSection";
import MainSecondSection from "../Components/MainSecondSection";

export const Section0 = styled.div`
  background-color: #f8f6ff;
  height: 80px;
  border-bottom: 1px solid #dadce0;
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
