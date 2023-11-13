import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: #fcf7ff;
  height: 60px;
  border-bottom: 1px solid #dedede;
  padding: 0 100px;
  /* width: 100%; */

  a {
    text-decoration: none;
    color: #404040;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    gap: 20px;
    margin-right: 0;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      font-size: 14px;

      a {
        text-decoration: none;
        color: #404040;
      }
    }
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor || "#E0D8FF"};
  color: ${(props) => props.color || "#404040"};
  width: 90px;
  height: 30px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  margin: 10px;

  &:hover {
    border: 2px solid #9c9c9c;
    cursor: pointer;
  }
`;
