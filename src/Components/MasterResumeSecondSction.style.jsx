import styled from "styled-components";

export const Inner = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;
export const TextStyle = styled.p`
  text-align: ${(props) => props.textAlign || "left"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "#404040"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const Section = styled.div`
  padding: 20px 0;
  height: 100%;
`;

export const BorderSection = styled.div`
  display: flex;
  border-top: ${(props) => props.borderTop || "none"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  justify-content: ${(props) => props.alignItems || "flex-start"};
`;
export const TextInputArea = styled.div`
  margin: 20px 0;
`;
export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor || "#fcf7ff"};
  color: ${(props) => props.color || "#404040"};
  width: 100px;
  height: 30px;
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

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 35px 0;
`;
export const GridObjContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "100px 1fr"};
  gap: 20px;
  margin: ${(props) => props.margin || "10px"};
  align-items: center;
`;
export const Label = styled.label`
  font-weight: 600;
  text-align: left;
`;
export const InputField = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 1px solid #dedede;
  border-radius: 5px;
`;
export const InputRadio = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  height: 30px;
  padding: 5px;
`;
