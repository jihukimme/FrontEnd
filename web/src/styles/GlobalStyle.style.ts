import { createGlobalStyle } from 'styled-components';

// 글로벌 스타일을 정의하는 코드
// 애플리케이션 전체에 적용되는 기본 스타일을 설정하는데 사용
export const GlobalStyle = createGlobalStyle`
  body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: Arial, Helvetica, sans-serif;
        transition: all 0.3s ease-in-out; /* 전환 시 부드러운 애니메이션 */
    }
`;
