import React from "react";
import { Section, Inner, StepSection, StepObj, IconWrap, TextStyle } from "./MainFirstSection.style";
import { SlNote, SlNotebook, SlPaperClip } from "react-icons/sl";

function MainFirstSection() {
  return (
    <Section>
      <Inner>
        <TextStyle fontSize="36px" fontWeight="700" margin="0 0 20px 0">
          이력서와 자기소개서 작성을 위한 <br />
          Chat GPT 활용 WEB
        </TextStyle>
        <TextStyle fontSize="16px" margin="0 0 40px 0 ">
          다음 STEP을 따라 입사 지원 시에 필요한 서류를 완성해보세요.
        </TextStyle>

        <StepSection>
          <StepObj>
            <IconWrap>
              <SlNote size={28} color="#404040" />
            </IconWrap>
            <TextStyle fontSize="20px" fontWeight="500" margin="0 0 10px 0 ">
              STEP 01
            </TextStyle>
            <TextStyle fontSize="12px" fontWeight="300">
              마스터 이력서를
              <br />
              작성해 보세요.
            </TextStyle>
          </StepObj>

          <StepObj>
            <IconWrap>
              <SlNotebook size={28} color="#404040" />
            </IconWrap>
            <TextStyle fontSize="20px" fontWeight="500" margin="0 0 10px 0 ">
              STEP 02
            </TextStyle>
            <TextStyle fontSize="12px" fontWeight="300">
              마스터 자기소개서를
              <br />
              작성해 보세요.
            </TextStyle>
          </StepObj>

          <StepObj>
            <IconWrap>
              <SlPaperClip size={28} color="#404040" />
            </IconWrap>
            <TextStyle fontSize="20px" fontWeight="500" margin="0 0 10px 0">
              STEP 03
            </TextStyle>
            <TextStyle fontSize="12px" fontWeight="300">
              마스터 자기소개서를 이용해
              <br />
              기업별 자기소개서를
              <br />
              완성해 보세요.
            </TextStyle>
          </StepObj>
        </StepSection>
      </Inner>
    </Section>
  );
}

export default MainFirstSection;
