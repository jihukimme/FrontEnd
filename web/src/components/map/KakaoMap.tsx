import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import myLocationMarker from '../../assets/markers/myLocation.png';
import * as styled from './KakaoMap.style';
import useKakaoLoader from './useKakaoLoader';

type LocationType = {
  lat: number;
  lng: number;
};

type KakaoMapProps = {
  searchValue: string; // 검색어를 받는 prop
};

export default function KakaoMap({ searchValue }: KakaoMapProps) {
  useKakaoLoader();

  const defaultLocation: LocationType = {
    lat: 33.450701,
    lng: 126.570667,
  };

  const [location, setLocation] = useState<LocationType>(defaultLocation);
  const [myLocation, setMyLocation] = useState<LocationType>(defaultLocation);
  const [markers, setMarkers] = useState<LocationType[]>([]);

  // 현재 위치 가져오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setMyLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Geolocation error:', error);
          // 사용자 거부 또는 오류 발생 시 디폴트 좌표 설정
          setLocation(defaultLocation);
          setMyLocation(defaultLocation);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLocation(defaultLocation);
      setMyLocation(defaultLocation);
    }
  }, []);

  // 키워드로 장소 검색하기
  useEffect(() => {
    if (!searchValue) return;

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchValue, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        const newMarkers = data.map((place) => {
          const lat = Number(place.y);
          const lng = Number(place.x);
          bounds.extend(new kakao.maps.LatLng(lat, lng));
          return { lat, lng };
        });

        setMarkers(newMarkers);
        setLocation({ lat: Number(data[0].y), lng: Number(data[0].x) }); // 첫 번째 결과를 중심으로 설정
      }
    });
  }, [searchValue]);

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
        {/* 내 위치 마커 */}
        <MapMarker
          image={{
            src: myLocationMarker,
            size: { width: 30, height: 30 },
          }}
          position={myLocation}
        />

        {/* 검색 결과 마커 */}
        {markers.map((marker, index) => (
          <MapMarker key={index} position={marker} />
        ))}
      </Map>
    </styled.KakaoMapWrapper>
  );
}
