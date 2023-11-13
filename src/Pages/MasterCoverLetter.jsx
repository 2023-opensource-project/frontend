import React from "react";
import styled from "styled-components";
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
export const Section1 = styled.div`
  font: bold 30px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
`;
export const Inner = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  background-color: bisque;
`;
export const InputField = styled.input`
  width: 100%;
  height: 300px;
  /* padding: 5px; */
  border: 1px solid #dedede;
  border-radius: 5px;
`;
export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor || "#fcf7ff"};
  color: ${(props) => props.color || "#404040"};
  width: 200px;
  height: 60px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin: 10px;

  &:hover {
    background-color: #bcb3da;
    color: white;
    cursor: pointer;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const Section2 = styled.div`
  background-color: aliceblue;
  display: flex;
  direction: column;
`;
export const printField = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #dedede;
  border-radius: 5px;
  background-color: gainsboro;
`;

function MasterCoverLetter() {
  return (
    <Container>
      <Section1>마스터 자기소개서 작성</Section1>
      <div>숫자 표현</div>

      <Inner>
        <Title>
          <div>문항</div>
          <div> tip! </div>
          <Button>저장</Button>
        </Title>
        <div>
          BEFORE
          <InputField type="text" placeholder="A" />
          글자수 세기 : {}/{}자
          <div style={{ width: "100%", justifyContent: "space-between" }}>
            <Button>맞춤법 검사</Button>
            <Button>글자 수 늘리기</Button>
            <Button>글자 수 줄이기</Button>
            <Button>소제목 생성</Button>
          </div>
        </div>

        <Section2>
          <div>AFTER</div>
          <printField>AFTER글이 나올 공간</printField>
        </Section2>
      </Inner>
    </Container>
  );
}

export default MasterCoverLetter;
