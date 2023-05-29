import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductDetailCard({ productDetail }) {
  return (
    <Link to={`/product/${productDetail.product_id}`}>
      <div>
        <img src={productDetail.image} alt="" />
        <strong>{productDetail.product_name}</strong>
        <p>{productDetail.seller}</p>
        <p>
          도수 <span>{productDetail.abv}</span>/ml
        </p>
        <p>
          <span>{productDetail.likeCount}</span>명이 연결했어요
        </p>
        {/* 모아보기 페이지 좋아요 기능도 넣을 경우 아래 이미지는 추후 버튼으로 변경 */}
        <img src="" alt="로네 링크 이미지" />
      </div>
    </Link>
  );
}
