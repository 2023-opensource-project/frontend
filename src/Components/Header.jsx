import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HeaderContainer, Nav } from "./Header.style.jsx";
import { Inner, Button } from "../Constants/style.jsx";

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Inner>
        <Nav>
          <NavLink to="/" exact>
            LOGO
          </NavLink>
          <div>
            <ul>
              <li>
                <NavLink to="/masterResume" activeClassName="active">
                  마스터 이력서 작성
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/masterCoverLetter" activeClassName="active">
                  마스터 자기소개서 작성
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/CoverLetter" activeClassName="active">
                  기업별 자기소개서 작성
                </NavLink>
              </li>
            </ul>
            <Button margin="10px" onClick={() => navigate("/login")}>
              로그인
            </Button>
          </div>
        </Nav>
      </Inner>
    </HeaderContainer>
  );
}

export default Header;
