import React from "react";
import * as F from "./MainFirstSection.style";
import { SlNote, SlNotebook, SlPaperClip } from "react-icons/sl";

function MainFirstSection() {
  return (
    <div>
      <F.Section1>
        <F.Title>
          이력서와 자기소개서 작성을 위한 <br />
          Chat GPT 활용 WEB
        </F.Title>
        <F.Text2>다음 STEP을 따라 입사 지원 시에 필요한 서류를 완성해보세요.</F.Text2>
        <F.StepSection>
          <F.StepObj>
            <F.IconWrap>
              <SlNote size={28} color="#404040" />
            </F.IconWrap>
            <F.Text1>STEP 01</F.Text1>
            <F.Text3>
              마스터 이력서를
              <br />
              작성해 보세요.
            </F.Text3>
          </F.StepObj>
          <F.StepObj>
            <F.IconWrap>
              <SlNotebook size={28} color="#404040" />
            </F.IconWrap>
            <F.Text1>STEP 02</F.Text1>
            <F.Text3>
              마스터 자기소개서를
              <br />
              작성해 보세요.
            </F.Text3>
          </F.StepObj>
          <F.StepObj>
            <F.IconWrap>
              <SlPaperClip size={28} color="#404040" />
            </F.IconWrap>
            <F.Text1>STEP 03</F.Text1>
            <F.Text3>
              마스터 자기소개서를 이용해
              <br />
              기업별 자기소개서를
              <br />
              완성해 보세요.
            </F.Text3>
          </F.StepObj>
        </F.StepSection>
      </F.Section1>
    </div>
  );
}

export default MainFirstSection;
