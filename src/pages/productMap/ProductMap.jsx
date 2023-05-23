import React from 'react';
import './ProductMap.css';
import Header from '../../components/common/header/Header';
import NavBar from '../../components/common/navBar/NavBar';
import KakaoMap from '../../components/kakaoMap/KakaoMap';
// import PlaceInfoModal from '../../components/placeInfoModal/PlaceInfoModal';

export default function ProductMap() {
  return (
    <>
      <div>
        <Header />
        <KakaoMap />
        <NavBar />
      </div>
      {/* <PlaceInfoModal /> */}
    </>
  );
}
