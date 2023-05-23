import React from 'react';
import ProductCard from '../common/productCard/ProductCard';

export default function PlaceInfoModal({
  isMarkerClicked,
  setIsMarkerClicked,
}) {
  return (
    <section>
      <h3>양조장명</h3>
      <address>상세주소</address>
      <ul>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
      </ul>
      <button
        onClick={() => {
          setIsMarkerClicked(!isMarkerClicked);
        }}
      >
        닫기 버튼
      </button>
    </section>
  );
}
