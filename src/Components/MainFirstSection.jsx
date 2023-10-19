import React from "react";
import { Section, Inner, TextStyle } from "./MainFirstSection.style";
import MainStepSection from "./MainStepSection";

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

        <MainStepSection />
      </Inner>
    </Section>
  );
}

export default MainFirstSection;
