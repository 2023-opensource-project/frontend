import { React, useState } from "react";
import styled from "styled-components";
import { Inner } from "../Constants/style";
import TitleContainer from "../MasterCoverLetterComponents/TitleContainer";
import TabTitleContainer from "../MasterCoverLetterComponents/TabTitleContainer";
import GPTButton from "../MasterCoverLetterComponents/GPTButton";
import Recommend from "../MasterCoverLetterComponents/Recommend";
import FinalInput from "../MasterCoverLetterComponents/FinalInput";
// import Section1 from "../MasterCoverLetterComponents/Section1";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function MasterCoverLetter() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabContents, setTabContents] = useState(Array(10).fill(""));
  const [textLength, setTextLength] = useState(0);
  const [operationResult, setOperationResult] = useState({ operation: "", result: "" });
  const [finalContent, setFinalContent] = useState("");

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedContents = [...tabContents];
    updatedContents[activeTab] = value;
    setTabContents(updatedContents);
    setTextLength(value.length);
  };

  const handleOperation = (operation) => {
    const result = `${tabContents[activeTab]} -> "${operation}"을를 적용한 수정 후 내용입니다.`;
    setOperationResult({ operation, result });
  };

  const handleFinalInputChange = (event) => {
    const { value } = event.target;
    setFinalContent(value);
  };

  return (
    <Container>
      <Inner>
        <TitleContainer />
        <TabTitleContainer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabContents={tabContents}
          setTabContents={setTabContents}
          textLength={textLength}
          handleTabClick={handleTabClick}
          handleInputChange={handleInputChange}
        />
        <GPTButton handleOperation={handleOperation} />
        <Recommend operationResult={operationResult} />
        <FinalInput
          finalContent={finalContent}
          handleFinalInputChange={handleFinalInputChange}
          textLength={textLength}
        />
        {/* <Section1 /> */}
      </Inner>
    </Container>
  );
}

export default MasterCoverLetter;
