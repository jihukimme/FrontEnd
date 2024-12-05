import { useState } from 'react';
import * as styled from './SearchBar.style';

type SearchBarProps = {
  searchValue?: (inputValue: string) => void; // 선택적 prop
};

export default function SearchBar({ searchValue }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearch = () => {
    if (searchValue) {
      searchValue(inputValue);
    } else {
      console.warn('onSearch prop is not provided.');
    }
  };

  return (
    <styled.SearchBarWrapper>
      <styled.SearchBarInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <styled.SearchBarButton onClick={handleSearch}>검색</styled.SearchBarButton>
    </styled.SearchBarWrapper>
  );
}
