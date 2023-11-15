import React from "react";
import {
  Section,
  BorderSection,
  Button,
  GridContainer,
  GridObjContainer,
  Label,
  InputField,
  InputRadio,
} from "./SecondSection.style";
import { Inner, TextStyle } from "../Constants/style.jsx";

function SecondSection1() {
  return (
    <Section>
      <Inner>
        <BorderSection borderBottom="1px solid #BABABA">
          <TextStyle fontSize="24px" fontWeight="600" padding="10px 0">
            인적사항
          </TextStyle>
        </BorderSection>

        <GridContainer>
          <GridObjContainer>
            <Label>이름</Label>
            <InputField type="text" placeholder="Full Name" />
          </GridObjContainer>

          <GridObjContainer>
            <Label>성별</Label>
            <InputRadio>
              <label>
                <input type="radio" name="gender" value="male" /> 남성
              </label>
              <label>
                <input type="radio" name="gender" value="female" /> 여성
              </label>
            </InputRadio>
          </GridObjContainer>

          <GridObjContainer>
            <Label>생년월일</Label>
            <InputField type="text" placeholder="DD/MM/YYYY" />
          </GridObjContainer>

          <GridObjContainer>
            <Label>휴대폰번호</Label>
            <InputField type="text" placeholder="XXX-XXXX-XXXX" />
          </GridObjContainer>

          <GridObjContainer>
            <Label>이메일</Label>
            <InputField type="text" placeholder="your@email" />
          </GridObjContainer>

          <GridObjContainer>
            <Label>주소</Label>
            <InputField type="text" placeholder="address" />
          </GridObjContainer>
        </GridContainer>

        <BorderSection borderTop="1px solid #BABABA" alignItems="flex-end">
          <Button>저장</Button>
          <Button>다음</Button>
        </BorderSection>
      </Inner>
    </Section>
  );
}

export default SecondSection1;
