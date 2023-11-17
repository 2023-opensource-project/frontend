import { React, useState } from "react";
import styled from "styled-components";
import { TabContainer, Tab, TextStyle } from "../Constants/style";

const TabCon = styled(TabContainer)`
  flex-wrap: wrap;
`;

const TabNew = styled(Tab)`
  width: 124px;
  font-size: 12px;
`;

const tabTitles = [
  "성장 과정",
  "직무 역량",
  "지원 동기",
  "입사 후 포부",
  "성공 경험",
  "팀워크 발휘 경험",
  "성격 장단점",
  "사회 이슈",
  "창의성 발휘 경험",
  "실패 극복 경험",
];

const tablTitle2 = [
  "1. 성장 과정을 작성하세요.",
  "2. 직무 역량을 작성하세요.",
  "3. 지원 동기를 작성하세요.",
  "4. 입사 후 포부를 작성하세요.",
  "5. 성공 경험을 작성하세요.",
  "6. 팀워크 발휘 경험을 작성하세요.",
  "7. 성격 장단점을 작성하세요.",
  "8. 사회 이슈를 작성하세요.",
  "9. 창의성 발휘 경험을 작성하세요.",
  "10. 실패 극복 경험을 작성하세요.",
];

function TabTItleContainer() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        {tabTitles.map((title, index) => (
          <TabCon key={index}>
            <TabNew onClick={() => handleTabClick(index)} active={activeTab === index}>
              {title}
            </TabNew>
          </TabCon>
        ))}
      </div>
      {
        <TextStyle textAlign="left" fontWeight="500" margin="10px 0">
          ORIGIN {tablTitle2[activeTab]}
        </TextStyle>
      }
    </div>
  );
}

export default TabTItleContainer;
