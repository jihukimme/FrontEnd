import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  min-height: 8vh;
  z-index: 100;
`;

export const HeaderLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};

  text-decoration: none;
  font-size: 30px;
  font-weight: bold;

  &:focus,
  &:hover {
    color: black;
  }
`;
