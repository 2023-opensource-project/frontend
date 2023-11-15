import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, Nav, Button } from "./Header.style.jsx";
import { Inner } from "../Constants/style.jsx";

function Header() {
  return (
    <HeaderContainer>
      <Inner>
        <Nav>
          <Link to="/">LOGO</Link>
          <div>
            <ul>
              <li>
                <Link to="/masterResume">마스터 이력서 작성</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/masterCoverLetter">마스터 자기소개서 작성</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/CoverLetter">기업별 자기소개서 작성</Link>
              </li>
            </ul>
            <Button>로그인</Button>
          </div>
        </Nav>
      </Inner>
    </HeaderContainer>
  );
}

export default Header;
