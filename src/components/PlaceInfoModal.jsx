import React from 'react';
import ProductCard from './common/ProductCard';

export default function PlaceInfoModal({
  isMarkerClicked,
  setIsMarkerClicked,
  productData,
  selectedSeller,
}) {
  const selectedPlaces = productData?.filter(
    (item) => item.seller === selectedSeller,
  );
  const selectedAddress = selectedPlaces[0].address;

  return (
    <section>
      <h3>{selectedSeller}</h3>
      <address>{selectedAddress}</address>
      <ul>
        {selectedPlaces.map((item) => (
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
