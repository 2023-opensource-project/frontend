import styled from "styled-components";

export const TextStyle = styled.p`
  text-align: center;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin: ${(props) => props.margin || "0"};
`;

export const Section = styled.div`
  width: 1240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 40px 0;
`;

export const TabContainer = styled.div`
  display: flex;
  /* border: 1px solid #ccc; */
  /* border-radius: 5px; */
  overflow: hidden;
`;
export const Tabs = styled.div`
  flex: 1;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f4ebff;
    border-bottom: 4px solid #bcb3da;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
`;
export const Th = styled.th`
  height: 30px;
  padding: 10px;
  text-align: center;
  border-bottom: 3px double #dedede;
`;
export const Td = styled.td`
  height: 25px;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #dedede;
  font-size: 12px;
  font-weight: 300;
`;
