import React from 'react';
import ProductCard from './common/ProductCard';
import styled from 'styled-components';
import x from '../assets/img/x.png';

const MapModal = styled.div`
  background: #ebe6fc;
  box-shadow: rgba(152, 152, 152, 0.24) 0px 3px 8px;
  border-radius: 20px;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 412px;
  height: 330px;
  bottom: 1px;
  font-weight: 700;
  align-items: left;
  cursor: pointer;
  z-index: 5;
  text-align: left;
  padding: 15px 10px 0;

  address {
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 3px;
  }

  ul {
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 7px;
    align-content: center;
    text-align: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  li {
    width: 30px;
    margin-right: 92px;
    display: inline-block;
    font-weight: 400;
  }
`;

const MMHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;

  button {
    background: url(${x}) no-repeat;
    background-size: contain;
    width: 15px;
    height: 15px;
    border: none;
  }
`;

const MMTitle = styled.h1`
  font-size: 18px;
  letter-spacing: 3px;
  margin: 1px;
  justify-content: space-between;
`;

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
    <MapModal>
      <MMHeader>
        <MMTitle>{selectedSeller}</MMTitle>
        <button
          onClick={() => {
            setIsMarkerClicked(!isMarkerClicked);
          }}
        />
      </MMHeader>

      <address>{selectedAddress}</address>
      <ul>
        {selectedPlaces.map((item) => (
          <li key={item.product_id}>
            <ProductCard data={item} />
          </li>
        ))}
      </ul>
    </MapModal>
  );
}
