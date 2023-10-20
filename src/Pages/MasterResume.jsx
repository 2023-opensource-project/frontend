import React from "react";
import styled from "styled-components";
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
  BsFill5CircleFill,
  BsFill6CircleFill,
  BsFill7CircleFill,
  BsFill8CircleFill,
} from "react-icons/bs";

export const Inner = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;
export const Section0 = styled.div`
  background-color: #fcf7ff;
  height: 60px;
  border-bottom: 1px solid #dedede;
`;
export const Section1 = styled.div`
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
  top: 47%;
  transform: translateY(-50%);
`;
export const IconWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  z-index: 2;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  width: 100%;
`;
export const TextStyle = styled.p`
  text-align: ${(props) => props.textAlign || "center"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin: ${(props) => props.margin || "0"};
  color: ${(props) => props.color || "#bababa"};
`;
export const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function MasterResume() {
  return (
    <div>
      <Section0>Logo</Section0>
      <Inner>
        <Section1>
          <Line />
          <IconWrap>
            <NavWrap>
              <BsFill1CircleFill size={28} color="#BABABA" />
              <TextStyle fontSize="12px" fontWeight="600" margin="5px 0">
                인적 사항
              </TextStyle>
            </NavWrap>

            <NavWrap>
              <BsFill2CircleFill size={28} color="#BABABA" />
              <TextStyle fontSize="12px" fontWeight="600" margin="5px 0">
                학력 사항
              </TextStyle>
            </NavWrap>

            <NavWrap>
              <BsFill3CircleFill size={28} color="#BABABA" />
              <TextStyle fontSize="12px" fontWeight="600" margin="5px 0">
                경력 사항
              </TextStyle>
            </NavWrap>

            <NavWrap>
              <BsFill4CircleFill size={28} color="#BABABA" />
              <TextStyle fontSize="12px" fontWeight="600" margin="5px 0">
                간단 자기소개글
              </TextStyle>
            </NavWrap>

            <NavWrap>
              <BsFill5CircleFill size={28} color="#BABABA" />
              <TextStyle fontSize="12px" fontWeight="600" margin="5px 0">
                교육/활동/경험
              </TextStyle>
            </NavWrap>

            <NavWrap>
              <BsFill6CircleFill size={28} color="#BABABA" />
              <TextStyle fontSize="12px" fontWeight="600" margin="5px 0">
                자격증/어학/수상/능력
              </TextStyle>
            </NavWrap>

            <NavWrap>
              <BsFill7CircleFill size={28} color="#BABABA" />
              <TextStyle fontSize="12px" fontWeight="600" margin="5px 0">
                취업 우대사항
              </TextStyle>
            </NavWrap>

            <NavWrap>
              <BsFill8CircleFill size={28} color="#BABABA" />
              <TextStyle fontSize="12px" fontWeight="600" margin="5px 0">
                참고 자료
              </TextStyle>
            </NavWrap>
          </IconWrap>
        </Section1>
      </Inner>
    </div>
  );
}

export default MasterResume;
