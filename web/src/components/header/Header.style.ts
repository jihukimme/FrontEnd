import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// 전체 헤더 래퍼
export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  min-height: 8vh;
  position: relative;
  z-index: 10;
`;

// 헤더 링크 (로고)
export const HeaderLink = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
`;

// 메뉴 아이콘 (768px 미만에서만 표시)
export const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

// 메뉴 래퍼
export const NavMenu = styled.div<{ $isMenuOpen: boolean }>`
  display: flex;
  gap: 20px;

  /* 768px 미만에서는 메뉴 숨기기 */
  @media (max-width: 768px) {
    display: ${({ $isMenuOpen }) => ($isMenuOpen ? 'flex' : 'none')};
    position: absolute;
    top: 8vh; /* 헤더 아래에 메뉴 표시 */
    right: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    flex-direction: column;
    width: 200px;
    height: calc(100vh - 8vh);
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// 메뉴 링크
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
  transition: all 0.3s ease-in-out; /* 전환 시 부드러운 애니메이션 */

  /* 현재 활성화된 링크 스타일 */
  &.active {
    font-weight: bold; /* 글자 강조 */
    font-size: 1.1rem; /* 글자 크기 증가 */
    color: black; /* primary 색상 강조 */
  }
`;
