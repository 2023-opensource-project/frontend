import styled from "styled-components";

export const Section = styled.div`
  background-color: #fcf7ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
`;
export const Inner = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const StepSection = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const StepObj = styled.div`
  background-color: #e0d8ff;
  width: 200px;
  height: 180px;
  border-radius: 30px;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const TextStyle = styled.p`
  text-align: center;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin: ${(props) => props.margin || "0"};
`;
