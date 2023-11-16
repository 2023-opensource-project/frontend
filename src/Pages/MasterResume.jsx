import React from "react";
import styled from "styled-components";
import { Inner, Button } from "../Constants/style";
import { Form } from "../MasterResumeComponents/MasterResume.style";
import PersonalInfo from "../MasterResumeComponents/PersonalInfo";
import SchoolInfo from "../MasterResumeComponents/SchoolInfo";
import CareerInfo from "../MasterResumeComponents/CareerInfo";
import EducationInfo from "../MasterResumeComponents/EducationInfo";
import LanguageInfo from "../MasterResumeComponents/LanguageInfo";
import AwardsInfo from "../MasterResumeComponents/AwardsInfo";
import QualificationInfo from "../MasterResumeComponents/QualificationInfo";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function MasterResume() {
  return (
    <Container>
      <Inner>
        <Form>
          <PersonalInfo />
          <SchoolInfo />
          <CareerInfo />
          <EducationInfo />
          <LanguageInfo />
          <AwardsInfo />
          <QualificationInfo />

          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "40px" }}>
            <Button type="submit" width="160px" height="40px" fontSize="16px" fontWeight="600">
              제출
            </Button>
          </div>
        </Form>
      </Inner>
    </Container>
  );
}

export default MasterResume;
