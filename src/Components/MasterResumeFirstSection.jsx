import React from "react";
import { Section, Inner, Line, IconWrap, NavWrap, TextStyle } from "./MasterResumeFirstSection.style";
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
  BsFill5CircleFill,
  BsFill6CircleFill,
  BsFill7CircleFill,
  BsFill8CircleFill,
} from "react-icons/bs";

function MasterResumeFirstSection() {
  const sections = [
    { icon: <BsFill1CircleFill size={28} color="#BABABA" />, text: "인적 사항" },
    { icon: <BsFill2CircleFill size={28} color="#BABABA" />, text: "학력 사항" },
    { icon: <BsFill3CircleFill size={28} color="#BABABA" />, text: "경력 사항" },
    { icon: <BsFill4CircleFill size={28} color="#BABABA" />, text: "간단 자기소개글" },
    { icon: <BsFill5CircleFill size={28} color="#BABABA" />, text: "교육/활동/경험" },
    { icon: <BsFill6CircleFill size={28} color="#BABABA" />, text: "자격증/어학/수상/능력" },
    { icon: <BsFill7CircleFill size={28} color="#BABABA" />, text: "취업 우대사항" },
    { icon: <BsFill8CircleFill size={28} color="#BABABA" />, text: "참고 자료" },
  ];

  return (
    <Section>
      <Inner>
        <Line />
        <IconWrap>
          {sections.map((section) => (
            <NavWrap>
              {section.icon}
              <TextStyle fontSize="12px" fontWeight="600" margin="5px 0">
                {section.text}
              </TextStyle>
            </NavWrap>
          ))}
        </IconWrap>
      </Inner>
    </Section>
  );
}

export default MasterResumeFirstSection;
