import React from 'react';

export default function ProductDetailCard({ productDetail }) {
  return (
    <div>
      <img src="" alt="" />
      <strong>{productDetail.product_name}</strong>
      <p>{productDetail.seller}</p>
      <p>
        도수 <span>{productDetail.abv}</span>/ml
      </p>
      <button>
        마셔봤어요 아이콘<span>{productDetail.likeCount}</span>
      </button>
    </div>
  );
}
