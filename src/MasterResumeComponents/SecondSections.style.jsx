import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: "33.33%";
`;

export const Input = styled.input`
  padding: 10px;
  margin: 0 30px 0 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 280px;
`;

export const Dropdown = styled.select`
  padding: 10px;
  margin: 0 30px 0 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 300px;
  height: 40px;
`;
