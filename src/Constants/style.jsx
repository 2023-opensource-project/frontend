import styled from "styled-components";

export const Inner = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const TextStyle = styled.p`
  text-align: center;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin: ${(props) => props.margin || "0"};
`;
