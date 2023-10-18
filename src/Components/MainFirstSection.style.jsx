import styled from "styled-components";

export const Section = styled.div`
  background-color: #fcf7ff;
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StepSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0px 100px;
  margin: 20px;
`;
export const StepObj = styled.div`
  background-color: #e0d8ff;
  width: 240px;
  height: 200px;
  border-radius: 30px;
  padding: 20px;
  box-sizing: border-box;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

export const TextStyle = styled.p`
  text-align: center;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  margin: ${(props) => props.margin || "0"};
`;
