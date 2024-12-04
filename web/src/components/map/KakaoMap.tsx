import { Map } from 'react-kakao-maps-sdk';
import * as styled from './KakaoMap.style';
import useKakaoLoader from './useKakaoLoader';

export default function BasicMap() {
  useKakaoLoader();

  return (
    <styled.KakaoMapWrapper>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
        }}
        level={3} // 지도의 확대 레벨
      />
    </styled.KakaoMapWrapper>
  );
}

// import { Map, MapMarker } from 'react-kakao-maps-sdk';

// const KakaoMap = () => {
//   const s_lat = 37.55465000468857;
//   const s_lng = 126.97059787494679;

//   return (
//     <>
//       <Map center={{ lat: s_lat, lng: s_lng }} style={{ width: '100%', height: '360px' }}>
//         <MapMarker position={{ lat: s_lat, lng: s_lng }}></MapMarker>
//       </Map>
//     </>
//   );
// };

// export default KakaoMap;
