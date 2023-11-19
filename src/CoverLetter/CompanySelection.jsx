import { React, useState } from "react";
import { Title, Button, TabContainer, Tab, TextStyle } from "../Constants/style";
import { SelectBox } from "./CoverLetter.style";
import companyList from "./CompanyList";

function CompanySelection() {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [confirmedCompany, setConfirmedCompany] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const handleCompanySelect = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleConfirmClick = () => {
    if (selectedCompany) {
      setConfirmedCompany(selectedCompany);
      setActiveTab(0); // 새로운 기업 선택 시 첫 번째 탭으로 초기화
    } else {
      alert("기업을 선택해주세요.");
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div style={{ borderBottom: "1px dashed #DEDEDE" }}>
        <Title>기업 공고 확인</Title>
        <SelectBox value={selectedCompany} onChange={handleCompanySelect}>
          <option value="">기업을 선택하세요</option>
          {companyList.map((company, index) => (
            <option key={index} value={company.name}>
              {company.name}
            </option>
          ))}
        </SelectBox>
        <Button onClick={handleConfirmClick} backgroundColor="#BE9CFF" margin=" 0 10px ">
          확인
        </Button>
      </div>

      <div>
        {confirmedCompany && (
          <div>
            <Title>{confirmedCompany} 자기소개서</Title>
            <TabContainer style={{ marginTop: "0" }}>
              {[...Array(6)].map((_, index) => {
                const questions = companyList.find((company) => company.name === confirmedCompany).questions;
                if (index < questions.length) {
                  return (
                    <Tab key={index} onClick={() => handleTabClick(index)} active={activeTab === index}>
                      <TextStyle fontSize="14px">{questions[index]}</TextStyle>
                    </Tab>
                  );
                } else {
                  return (
                    <Tab key={index} style={{ cursor: "not-allowed", backgroundColor: "transparent" }}>
                      <TextStyle fontSize="14px"></TextStyle>
                    </Tab>
                  );
                }
              })}
            </TabContainer>
            <TextStyle textAlign="left" fontWeight="500" margin="10px 0">
              {`${companyList.find((company) => company.name === confirmedCompany).questions[activeTab]}을 작성하세요.`}
            </TextStyle>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanySelection;
