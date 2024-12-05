import { useState } from 'react';
import KakaoMap from '../../components/map/KakaoMap';
import SearchBar from '../../components/searchbar/SearchBar';
import * as styled from './Page1.style';

export default function Page1() {
  const [searchKeyword, setSearchKeyword] = useState<string>(''); // 검색어 상태

  return (
    <styled.Page1Wrapper>
      <KakaoMap searchValue={searchKeyword} />
      <styled.SearchBarOverlay>
        <SearchBar searchValue={setSearchKeyword} />
      </styled.SearchBarOverlay>
    </styled.Page1Wrapper>
  );
}
