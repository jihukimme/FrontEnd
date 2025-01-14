import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import myLocationMarker from '../../assets/markers/myLocation.png';
import Card from '../card/Card';
import * as styled from './KakaoMap.style';
import useKakaoLoader from './useKakaoLoader';

type LocationType = {
  lat: number;
  lng: number;
};

type PlaceType = {
  place_name: string; // 장소명
  road_address_name: string; // 도로명 주소
  phone: string; // 전화번호
  place_url: string; // 장소 상세 페이지 URL(카카오 맵)
  lat: number; // 위도
  lng: number; // 경도
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
  const [markers, setMarkers] = useState<PlaceType[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<PlaceType | null>(null); // 선택된 장소

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
    if (!searchValue) {
      // 공백 검색어일 경우 현재 위치로 이동
      setLocation(myLocation);
      setMarkers([]); // 기존 마커 제거
      return;
    }

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchValue, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        const newMarkers = data.map((place) => {
          console.log(place);

          const lat = Number(place.y);
          const lng = Number(place.x);

          bounds.extend(new kakao.maps.LatLng(lat, lng));

          return {
            place_name: place.place_name,
            road_address_name: place.road_address_name,
            phone: place.phone,
            place_url: place.place_url,
            lat,
            lng,
          };
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
          <MapMarker
            key={index}
            position={marker}
            clickable={true}
            onClick={() => {
              setSelectedPlace(marker); // 선택된 장소 정보 설정
              setLocation({ lat: marker.lat, lng: marker.lng }); // 위치 변경
            }}
          />
        ))}
      </Map>

      {/* 선택된 장소 정보 카드 */}
      {selectedPlace && (
        <styled.CardOverlay>
          <Card
            title={selectedPlace.place_name}
            sub_title={selectedPlace.road_address_name}
            description={selectedPlace.phone}
            link={selectedPlace.place_url}
            onClick={() => setSelectedPlace(null)}
          />
        </styled.CardOverlay>
      )}
    </styled.KakaoMapWrapper>
  );
}
