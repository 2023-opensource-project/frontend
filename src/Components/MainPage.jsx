import React from "react";

function MainPage() {
  return (
    <div>
      <section>
        <h1>이력서와 자기소개서 작성을 위한 Chat GPT 활용 WEB</h1>
        <span>다음 STEP을 따라 입사 지원 시에 필요한 서류를 완성해보세요.</span>
        <div>
          <img src="#" alt="STPE 01 img" />
          <span>STEP 01</span>
          <span>마스터 이력서를 작성해 보세요.</span>
        </div>
        <div>
          <img src="#" alt="STPE 02 img" />
          <span>STEP 02</span>
          <span>마스터 자기소개서를 작성해 보세요.</span>
        </div>
        <div>
          <img src="#" alt="STPE 03 img" />
          <span>STEP 03</span>
          <span>마스터 자기소개서를 이용해 기업별 자기소개서를 완성해 보세요.</span>
        </div>
      </section>
      <section>
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
      </section>
    </div>
  );
}

export default MainPage;
