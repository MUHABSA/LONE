import React, { useEffect } from 'react';
import './KakaoMap.css';
import markerClicked from '../../assets/markerClicked.png';
import markerDefault from '../../assets/markerDefault.png';
import markerVisited from '../../assets/markerVisited.png';

export default function KakaoMap({
  productData,
  isMarkerClicked,
  setIsMarkerClicked,
}) {
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

    // 양조장명으로 오름차순 정렬
    productData?.sort((a, b) =>
      a.seller.toLowerCase() < b.seller.toLowerCase() ? -1 : 1,
    );

    // 양조장을 최상위 property로 데이터 가공
    let reformedData = [];
    productData?.map((item) => {
      reformedData = [
        ...reformedData,
        {
          seller: {
            seller_name: item.seller,
            products: [
              {
                title: item.product_name,
                latlng: new kakao.maps.LatLng(item.lat, item.lng),
                isLiked: item.liked,
              },
            ],
          },
        },
      ];
    });

    // 양조장(위경도) value가 같은 객체를 병합
    const groupValues = reformedData.reduce((acc, current) => {
      acc[current.seller.seller_name] = acc[current.seller.seller_name] || [];
      acc[current.seller.seller_name].push(...current.seller.products);
      return acc;
    }, {});
    const positions = Object.entries(groupValues).map((item) => {
      return {
        seller: item[0],
        latlng: item[1][0].latlng,
        products: item[1],
      };
    });

    // 지도 위에 마커 표시
    const markerSize = new kakao.maps.Size(MARKER_WIDTH, MARKER_HEIGHT);
    const defaultMarkerImage = new kakao.maps.MarkerImage(
      markerDefault,
      markerSize,
    );
    const clickedMarkerImage = new kakao.maps.MarkerImage(
      markerClicked,
      markerSize,
    );
    const visitedMarkerImage = new kakao.maps.MarkerImage(
      markerVisited,
      markerSize,
    );
    let selectedMarker = null;

    positions.forEach((item) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: item.latlng,
        title: item.seller,
        //하나라도 방문했다면 방문 마크로 변경됨
        image: !item.products.some((product) => product.isLiked)
          ? defaultMarkerImage
          : visitedMarkerImage,
      });
      if (item.products.some((product) => product.isLiked)) {
        marker.liked = true;
      } else {
        marker.liked = false;
      }

      // 선택한 마커 이미지 변경
      kakao.maps.event.addListener(marker, 'click', function () {
        if (!selectedMarker || selectedMarker !== marker) {
          !!selectedMarker &&
            selectedMarker.setImage(
              !selectedMarker.liked ? defaultMarkerImage : visitedMarkerImage,
            );
          marker.setImage(clickedMarkerImage);
        }
        selectedMarker = marker;
        setIsMarkerClicked(!isMarkerClicked);
      });
    });
  }, [productData]);

  return (
    <div id="map" className="map">
      KakaoMap
    </div>
  );
}
