import React from "react";
import styled from "styled-components";
import MasterResumeFirstSection from "../Components/MasterResumeFirstSection";
import MasterResumeSecondSection from "../Components/MasterResumeSecondSection";

export const Container = styled.div`
  height: 100vh; /* 화면 높이를 100%로 설정 */
  display: flex; /* 자식 컴포넌트를 수직 방향으로 배치 */
  flex-direction: column; /* 컬럼 방향으로 배치 (수직 중앙 정렬) */
`;
export const Section0 = styled.div`
  background-color: #fcf7ff;
  height: 60px;
  border-bottom: 1px solid #dedede;
`;

function MasterResume() {
  return (
    <Container>
      <Section0>Logo</Section0>
      <MasterResumeFirstSection />
      <MasterResumeSecondSection />
    </Container>
  );
}

export default MasterResume;
