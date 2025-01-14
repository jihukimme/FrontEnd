import styled from 'styled-components';

export const KakaoMapWrapper = styled.div`
  width: 100%;
  //   height: 100%;
  height: calc(100vh - 8vh);

  position: relative;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 75%; /* 화면의 세로 중앙 */
  left: 50%; /* 화면의 가로 중앙 */
  transform: translate(-50%, -50%); /* 요소의 중심 정렬 */
  z-index: 1000;
`;
