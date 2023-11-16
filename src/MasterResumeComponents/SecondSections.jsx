import { React, useState } from "react";
import { Inner, TextStyle, Button } from "../Constants/style";
import { Form, ItemWrapper, LineWrapper, Container, Input, Dropdown } from "./SecondSections.style";

const FormItem = ({ label, type = "text", name, options }) => (
  <Container>
    <div style={{ width: "80px" }}>
      <TextStyle fontSize="14px" textAlign="left">
        {label}
      </TextStyle>
    </div>
    <div>
      {type === "dropdown" ? (
        <Dropdown name={name}>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </Dropdown>
      ) : (
        <Input type={type} name={name} />
      )}
    </div>
  </Container>
);

const PersonalInfo = () => {
  return (
    <div style={{ margin: "40px 0 0 0" }}>
      <div style={{ borderBottom: "1px solid #ddd", marginBottom: "10px" }}>
        <TextStyle textAlign="left" fontSize="22px" fontWeight="600" margin="10px 0">
          기본 인적 사항
        </TextStyle>
      </div>
      <div style={{ backgroundColor: "#FAFAFA", padding: "10px" }}>
        <LineWrapper>
          <FormItem label="이름" name="name" />
          <FormItem label="영문 이름" name="englishName" />
          <FormItem label="성별" type="dropdown" name="gender" options={["남성", "여성"]} />
        </LineWrapper>
        <LineWrapper>
          <FormItem label="생년월일" type="date" name="birthDate" />
          <FormItem label="휴대폰" type="tel" name="phone" />
          <FormItem label="이메일" type="email" name="email" />
        </LineWrapper>
        <FormItem label="주소" name="address" />
      </div>
    </div>
  );
};

const EducationInfo = () => {
  const [educationCount, setEducationCount] = useState(1);

  const handleAddEducation = (event) => {
    event.preventDefault();
    setEducationCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ margin: "20px 0 0 0" }}>
      <div style={{ borderBottom: "1px solid #ddd", marginBottom: "10px" }}>
        <TextStyle textAlign="left" fontSize="22px" fontWeight="600" margin="10px 0">
          학력 사항
          <Button
            type="button"
            onClick={handleAddEducation}
            backgroundColor="#F4EBFF"
            width="30px"
            height="30px"
            margin="0 20px"
          >
            +
          </Button>
        </TextStyle>
      </div>
      {Array.from({ length: educationCount }, (_, index) => (
        <ItemWrapper key={index}>
          <LineWrapper>
            <FormItem label="학교" name={`school${index}`} />
            <FormItem label="전공" name={`major${index}`} />
            <FormItem
              label="졸업 여부"
              type="dropdown"
              name={`graduated${index}`}
              options={["졸업", "졸업예정", "재학", "휴학"]}
            />
          </LineWrapper>
          <LineWrapper>
            <FormItem label="입학(년/월)" type="month" name={`startMonth${index}`} />
            <FormItem label="졸업(년/월)" type="month" name={`endMonth${index}`} />
          </LineWrapper>
        </ItemWrapper>
      ))}
    </div>
  );
};

const CareerInfo = () => {
  const [careerCount, setCareerCount] = useState(1);

  const handleAddCareer = (event) => {
    event.preventDefault();
    setCareerCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ margin: "20px 0 0 0" }}>
      <div style={{ borderBottom: "1px solid #ddd", marginBottom: "10px" }}>
        <TextStyle textAlign="left" fontSize="22px" fontWeight="600" margin="10px 0">
          경력 사항
          <Button
            type="button"
            onClick={handleAddCareer}
            backgroundColor="#F4EBFF"
            width="30px"
            height="30px"
            margin="0 20px"
          >
            +
          </Button>
        </TextStyle>
      </div>
      {Array.from({ length: careerCount }, (_, index) => (
        <ItemWrapper key={index}>
          <LineWrapper>
            <FormItem label="구분" type="dropdown" name="career" options={["아르바이트", "인턴쉽"]} />
            <FormItem label="회사명" name="companyName" />
            <FormItem label="직무" name="position" />
          </LineWrapper>
          <LineWrapper>
            <FormItem label="재직 시작일" type="date" name="startWorkDate" />
            <FormItem label="재직 종료일" type="date" name="endWorkDate" />
          </LineWrapper>
        </ItemWrapper>
      ))}
    </div>
  );
};

const LanguageInfo = () => {
  return (
    <div style={{ margin: "20px 0 0 0" }}>
      <div style={{ borderBottom: "1px solid #ddd", marginBottom: "10px" }}>
        <TextStyle textAlign="left" fontSize="22px" fontWeight="600" margin="10px 0">
          어학 사항
        </TextStyle>
      </div>
      <div style={{ backgroundColor: "#FAFAFA", padding: "10px" }}>
        <LineWrapper>
          <FormItem label="어학 이름" name="languageName" />
          <FormItem label="자격명" name="qualificationName" />
        </LineWrapper>
        <LineWrapper>
          <FormItem label="등급/점수" name="gradeScore" />
          <FormItem label="응시일자" type="date" name="testDate" />
        </LineWrapper>
      </div>
    </div>
  );
};

const SecondSections = () => {
  return (
    <Inner>
      <Form>
        <PersonalInfo />
        <EducationInfo />
        <CareerInfo />
        <LanguageInfo />

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "40px" }}>
          <Button type="submit" width="160px" height="40px" fontSize="16px" fontWeight="600">
            제출
          </Button>
        </div>
      </Form>
    </Inner>
  );
};

export default SecondSections;
