import React from "react";
import styled from "styled-components";
import FirstSection from "../MasterResumeComponents/FirstSection";
import SecondSection from "../MasterResumeComponents/SecondSection";

export const Container = styled.div`
  height: 100vh; /* 화면 높이를 100%로 설정 */
  display: flex; /* 자식 컴포넌트를 수직 방향으로 배치 */
  flex-direction: column; /* 컬럼 방향으로 배치 (수직 중앙 정렬) */
`;

function MasterResume() {
  return (
    <Container>
      <FirstSection />
      <SecondSection />
    </Container>
  );
}

export default MasterResume;
