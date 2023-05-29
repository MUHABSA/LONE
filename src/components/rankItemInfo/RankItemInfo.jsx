import React from 'react';

export default function RankItemInfo({ productData, rank }) {
  return (
    <div>
      <p>{rank + 1}</p>
      <img src={productData.image} alt="" />
      <strong>{productData.product_name}</strong>
      <p>{productData.seller}</p>
      <p>
        <span>{productData.likeCount}</span>명이 연결됐어요
      </p>
      <button>마셔봤어요 버튼</button>
    </div>
  );
}
