import React, { useState } from 'react';
import './ProductMap.css';
import Header from '../../components/common/header/Header';
import NavBar from '../../components/common/navBar/NavBar';
import KakaoMap from '../../components/kakaoMap/KakaoMap';
import PlaceInfoModal from '../../components/placeInfoModal/PlaceInfoModal';

export default function ProductMap({ productData }) {
  const [isMarkerClicked, setIsMarkerClicked] = useState(false);

  return (
    <>
      <div>
        <Header />
        <KakaoMap
          productData={productData}
          isMarkerClicked={isMarkerClicked}
          setIsMarkerClicked={setIsMarkerClicked}
        />
        <NavBar />
      </div>
      {isMarkerClicked ? (
        <PlaceInfoModal
          isMarkerClicked={isMarkerClicked}
          setIsMarkerClicked={setIsMarkerClicked}
        />
      ) : null}
    </>
  );
}
