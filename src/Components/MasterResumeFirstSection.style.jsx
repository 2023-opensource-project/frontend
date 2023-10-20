import styled from "styled-components";

export const Inner = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;
export const TextStyle = styled.p`
  text-align: ${(props) => props.textAlign || "center"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin: ${(props) => props.margin || "0"};
  color: ${(props) => props.color || "#bababa"};
`;

export const Section = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  position: relative;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #bababa;
  z-index: 1;
  position: absolute;
`;
export const IconWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  z-index: 2;
  position: absolute;
  top: 30%;
  transform: translateY(-30%);
  width: 100%;
`;

export const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
