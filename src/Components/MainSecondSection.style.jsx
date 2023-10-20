import styled from "styled-components";

export const TextStyle = styled.p`
  text-align: center;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin: ${(props) => props.margin || "0"};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 40px 0;
  flex-wrap: wrap;
`;
export const Inner = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const TabContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin: 10px 0;
`;
export const Tab = styled.div`
  flex: 1;
  padding: 10px 0;
  text-align: center;
  font-weight: 500;
  background-color: ${(props) => (props.active ? "#F4EBFF" : "transparent")};
  border: 1px solid #fafafa;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #bcb3da;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 20px;
  background-color: #fafafa;
  font-size: 14px;
`;
export const Th = styled.th`
  height: 30px;
  padding: 5px;
  text-align: center;
  border-bottom: 3px double #dedede;
  font-weight: 400;
`;
export const Td = styled.td`
  height: 25px;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #dedede;
  font-weight: 300;
`;
