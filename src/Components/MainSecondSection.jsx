import React, { useState } from "react";
import { Section, Inner, TextStyle, TabContainer, Tab, Table, Th, Td } from "./MainSecondSection.style";

function MainSecondSection() {
  const data = [
    {
      Id: 1,
      CurrentProcess: "서류 작성 중",
      CompanyName: "(주)우아한형제들",
      Position: "배민푸드서비스실 배민푸드서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
    {
      Id: 2,
      CurrentProcess: "서류 작성 완료",
      CompanyName: "(주)우아한형제들",
      Position: "로봇서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
    {
      Id: 3,
      CurrentProcess: "서류 지원 완료",
      CompanyName: "(주)우아한형제들",
      Position: "로봇서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
    {
      Id: 4,
      CurrentProcess: "서류 합격",
      CompanyName: "(주)우아한형제들",
      Position: "로봇서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
    {
      Id: 5,
      CurrentProcess: "서류 불합격",
      CompanyName: "(주)우아한형제들",
      Position: "로봇서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [filteredData, setFilteredData] = useState(data);

  const handleTabChange = (value) => {
    setActiveTab(value);

    if (value === "all") {
      setFilteredData(data);
    } else if (value === "서류 지원 결과") {
      // 서류 합격과 서류 불합격 데이터를 필터링
      const filtered = data.filter(
        (item) => item.CurrentProcess === "서류 합격" || item.CurrentProcess === "서류 불합격"
      );
      setFilteredData(filtered);
    } else {
      // 다른 탭과 일치하는 데이터만 필터링
      const filtered = data.filter((item) => item.CurrentProcess === value);
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <Section>
        <Inner>
          <TextStyle fontSize="24px" fontWeight="700" margin="10px 0">
            입사 지원 관리 현황
          </TextStyle>

          <TabContainer>
            <Tab onClick={() => handleTabChange("all")} active={activeTab === "all"}>
              전체보기
            </Tab>
            <Tab onClick={() => handleTabChange("서류 작성 중")} active={activeTab === "서류 작성 중"}>
              서류 작성 중
            </Tab>
            <Tab onClick={() => handleTabChange("서류 작성 완료")} active={activeTab === "서류 작성 완료"}>
              서류 작성 완료
            </Tab>
            <Tab onClick={() => handleTabChange("서류 지원 완료")} active={activeTab === "서류 지원 완료"}>
              서류 지원 완료
            </Tab>
            <Tab onClick={() => handleTabChange("서류 지원 결과")} active={activeTab === "서류 지원 결과"}>
              서류 지원 결과
            </Tab>
          </TabContainer>

          <Table>
            <thead>
              <tr>
                <Th>현재 프로세스</Th>
                <Th>회사명</Th>
                <Th>직무</Th>
                <Th>마감일</Th>
                <Th>작성일</Th>
                <Th>이력서 자료</Th>
                <Th>자기소개서 자료</Th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.Id}>
                  <Td>{item.CurrentProcess}</Td>
                  <Td>{item.CompanyName}</Td>
                  <Td>{item.Position}</Td>
                  <Td>{item.Deadline}</Td>
                  <Td>{item.SubmissionDate}</Td>
                  <Td>{item.ResumeMaterial}</Td>
                  <Td>{item.CoverLetterMaterial}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Inner>
      </Section>
    </div>
  );
}

export default MainSecondSection;
