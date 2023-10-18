import React from "react";
import * as F from "./MainSecondSection.style";

function MainSecondSection() {
  return (
    <div>
      <F.Section2>
        <h3>입사 지원 관리 현황</h3>
        <table>
          <thead>
            <tr>
              <th>현재 프로세스</th>
              <th>회사명</th>
              <th>직무</th>
              <th>마감일</th>
              <th>작성일</th>
              <th>이력서 자료</th>
              <th>자기소개서 자료</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </F.Section2>
    </div>
  );
}

export default MainSecondSection;
