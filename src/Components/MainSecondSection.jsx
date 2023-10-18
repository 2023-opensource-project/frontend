import React from "react";
import { Section, TextStyle, TabContainer, Tabs, Table, Th, Td } from "./MainSecondSection.style";

function MainSecondSection() {
  const data = [
    {
      Id: 1,
      CurrentProcess: "서류 지원 완료",
      CompanyName: "(주)우아한형제들",
      Position: "배민푸드서비스실 배민푸드서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
    {
      Id: 2,
      CurrentProcess: "서류 작성 중",
      CompanyName: "(주)우아한형제들",
      Position: "로봇서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
  ];

  return (
    <div>
      <Section>
        <TextStyle fontSize="22px" fontWeight="600" margin="0 0 20px 0">
          입사 지원 관리 현황
        </TextStyle>

        <TabContainer>
          <Tabs>서류 작성 중</Tabs>
          <Tabs>서류 작성 완료</Tabs>
          <Tabs>서류 지원 완료</Tabs>
          <Tabs>서류 불합격</Tabs>
          <Tabs>서류 합격</Tabs>
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
            {data.map((item) => (
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
      </Section>
    </div>
  );
}

export default MainSecondSection;
