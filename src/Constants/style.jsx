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
`;

export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor || "#E0D8FF"};
  color: ${(props) => props.color || "#404040"};
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "30px"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  margin: ${(props) => props.margin || "0"};
  text-align: center;
  border-radius: 5px;
  border: none;

  &:hover {
    border: 2px solid #9c9c9c;
    cursor: pointer;
  }
`;
