import React from 'react';
import ProductCard from '../common/productCard/ProductCard';

export default function PlaceInfoModal({
  isMarkerClicked,
  setIsMarkerClicked,
  productData,
  selectedSeller,
}) {
  return (
    <section>
      <h3>{selectedSeller}</h3>
      <address>상세주소?</address>
      <ul>
        {productData
          ?.filter((item) => item.seller === selectedSeller)
          .map((item) => (
            <li key={item.product_id}>
              <ProductCard data={item} />
            </li>
          ))}
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
