import React, { useEffect } from 'react';
import './KakaoMap.css';
import markerClicked from '../../assets/markerClicked.png';
import markerDefault from '../../assets/markerDefault.png';

export default function KakaoMap({ isMarkerClicked, setIsMarkerClicked }) {
  const { kakao } = window;

  const MARKER_WIDTH = 30;
  const MARKER_HEIGHT = 30;

  const DEFAULT_LAT = 35.8;
  const DEFAULT_LNG = 127.77;

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
      level: 13,
    };
    const map = new kakao.maps.Map(container, options);

    //임시 데이터--
    const positions = [
      {
        title: '제주고소리술익는집',
        latlng: new kakao.maps.LatLng(33.38497236084034, 126.79376182886297),
      },
      {
        title: '대강양조장',
        latlng: new kakao.maps.LatLng(36.92216577406283, 128.35350965952983),
      },
      {
        title: '문경주조',
        latlng: new kakao.maps.LatLng(36.7722791733817, 128.31409354361026),
      },
      {
        title: '청산녹수',
        latlng: new kakao.maps.LatLng(35.37731106846008, 126.79282406031814),
      },
    ];
    //--임시데이터

    const markerSize = new kakao.maps.Size(MARKER_WIDTH, MARKER_HEIGHT);
    const defaultMarkerImage = new kakao.maps.MarkerImage(
      markerDefault,
      markerSize,
    );
    const clickedMarkerImage = new kakao.maps.MarkerImage(
      markerClicked,
      markerSize,
    );
    let selectedMarker = null;

    positions.forEach((item) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: item.latlng,
        title: item.title,
        image: defaultMarkerImage,
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        if (!selectedMarker || selectedMarker !== marker) {
          !!selectedMarker && selectedMarker.setImage(defaultMarkerImage);
          marker.setImage(clickedMarkerImage);
        }
        selectedMarker = marker;
        setIsMarkerClicked(!isMarkerClicked);
      });
    });
  }, []);

  return (
    <div id="map" className="map">
      KakaoMap
    </div>
  );
}
