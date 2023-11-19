import { React, useState } from "react";
import { Title, Button } from "../Constants/style";
import { SelectBox } from "./CoverLetter.style";
import companyList from "./CompanyList";

function CompanySelection() {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [confirmedCompany, setConfirmedCompany] = useState("");

  const handleCompanySelect = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleConfirmClick = () => {
    if (selectedCompany) {
      setConfirmedCompany(selectedCompany);
    } else {
      alert("기업을 선택해주세요.");
    }
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
            <Title>{confirmedCompany} 문항</Title>
            <ul>
              {companyList
                .find((company) => company.name === confirmedCompany)
                .questions.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanySelection;
