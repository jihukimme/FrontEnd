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
      console.log('검색어:', inputValue); // 검색어 확인 (테스트용)
    } else {
      console.warn('serchValue prop is not provided.');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(); // Enter 키를 누르면 검색 실행
    }
  };

  return (
    <styled.SearchBarWrapper>
      <styled.SearchBarInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown} // Enter 키 감지
        placeholder="검색어를 입력하세요"
      />
      <styled.SearchBarButton onClick={handleSearch}>검색</styled.SearchBarButton>
    </styled.SearchBarWrapper>
  );
}
