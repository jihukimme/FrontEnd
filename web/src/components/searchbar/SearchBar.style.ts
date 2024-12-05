import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const SearchBarInput = styled.input`
  flex: 1;
  border: none;
  padding: 0 15px;
  font-size: 16px;
  background-color: transparent;
  outline: none;
`;

export const SearchBarButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: bold;
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
