import styled from 'styled-components';

export const Page1Wrapper = styled.div``;

export const SearchBarOverlay = styled.div`
  position: absolute;
  top: 10vh; /* 지도의 상단에서 약간 떨어짐 */
  left: 50%;
  transform: translateX(-50%); /* 가로 중앙 정렬 */
  z-index: 1000; /* 지도 위에 표시되도록 설정 */
  width: 90%; /* 검색창 너비 */
`;
