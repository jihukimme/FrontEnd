import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import * as styled from './Header.style';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <styled.HeaderWrapper>
      <styled.HeaderLink to="/">Header</styled.HeaderLink>

      {/* 메뉴 아이콘 (768px 미만에서만 표시됨) */}
      <styled.MenuIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </styled.MenuIcon>

      {/* 메뉴 (768px 이상에서는 항상 표시, 768px 미만에서는 아이콘 클릭 시 표시) */}
      <styled.NavMenu $isMenuOpen={isMenuOpen}>
        <styled.NavLinkStyled to="/page1" onClick={toggleMenu}>
          Page 1
        </styled.NavLinkStyled>
        <styled.NavLinkStyled to="/page2" onClick={toggleMenu}>
          Page 2
        </styled.NavLinkStyled>
        <styled.NavLinkStyled to="/page3" onClick={toggleMenu}>
          Page 3
        </styled.NavLinkStyled>
        <styled.NavLinkStyled to="/page4" onClick={toggleMenu}>
          Page 4
        </styled.NavLinkStyled>
        <styled.NavLinkStyled to="/page5" onClick={toggleMenu}>
          Page 5
        </styled.NavLinkStyled>
      </styled.NavMenu>
    </styled.HeaderWrapper>
  );
}
