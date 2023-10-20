import React from "react";
import styled from "styled-components";
import MasterResumeFirstSection from "../Components/MasterResumeFirstSection";

export const Section0 = styled.div`
  background-color: #fcf7ff;
  height: 60px;
  border-bottom: 1px solid #dedede;
`;

function MasterResume() {
  return (
    <div>
      <Section0>Logo</Section0>
      <MasterResumeFirstSection />
    </div>
  );
}

export default MasterResume;
