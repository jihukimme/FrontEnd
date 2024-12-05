import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
// import clickLocationMarker from '../../assets/markers/clickLocation.png';
import myLocationMarker from '../../assets/markers/myLocation.png';
import * as styled from './KakaoMap.style';
import useKakaoLoader from './useKakaoLoader';

type LocationType = {
  lat: number;
  lng: number;
};

export default function KakaoMap() {
  useKakaoLoader();

  const defaultLocation: LocationType = {
    lat: 33.450701,
    lng: 126.570667,
  };

  const [location, setLocation] = useState<LocationType>(defaultLocation);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Geolocation error:', error);
          // 사용자 거부 또는 오류 발생 시 디폴트 좌표 설정
          setLocation(defaultLocation);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLocation(defaultLocation);
    }
  }, []);

  return (
    <styled.KakaoMapWrapper>
      <Map
        id="map"
        center={location} // 중심 좌표를 상태 값으로 설정
        style={{
          width: '100%', // 지도의 너비
          height: '100%', // 지도의 높이
        }}
        level={3} // 확대 레벨
      >
        <MapMarker
          image={{
            src: myLocationMarker,
            size: { width: 30, height: 30 },
          }}
          position={location}
        />
      </Map>
    </styled.KakaoMapWrapper>
  );
}
