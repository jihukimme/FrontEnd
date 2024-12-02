import * as styled from './Header.style';

export default function Header() {
  return (
    <styled.HeaderWrapper>
      <styled.HeaderLink to="/">Header</styled.HeaderLink>
      <styled.NavMenu>
        <styled.NavLinkStyled to="/page1">Page 1</styled.NavLinkStyled>
        <styled.NavLinkStyled to="/page2">Page 2</styled.NavLinkStyled>
        <styled.NavLinkStyled to="/page3">Page 3</styled.NavLinkStyled>
        <styled.NavLinkStyled to="/page4">Page 4</styled.NavLinkStyled>
        <styled.NavLinkStyled to="/page5">Page 5</styled.NavLinkStyled>
      </styled.NavMenu>
    </styled.HeaderWrapper>
  );
}
