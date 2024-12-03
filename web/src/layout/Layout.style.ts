import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  height: 100vh;
`;

export const ContentWrapper = styled.main`
  min-height: calc(100vh - 8vh);
  overflow-y: auto;
  padding: 0 20px;

  /* 768px 이하 화면에서 모바일 환경에 최적화 */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
