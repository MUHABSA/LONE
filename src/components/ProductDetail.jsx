import React from 'react';

export default function ProductDetail({ data }) {
  return (
    <div>
      <img src={data.image} alt="" />
      <dl>
        <div>
          <dt>제품명(ir)</dt>
          <dd>{data.product_name}</dd>
        </div>
        <div>
          <dt>도수</dt>
          <dd>{data.abv}%</dd>
        </div>
        <div>
          <dt>용량</dt>
          <dd>{data.volume}ml</dd>
        </div>
        <div>
          <dt>주종</dt>
          <dd>{data.category}</dd>
        </div>
        <div>
          <dt>생산자</dt>
          <dd>{data.seller}</dd>
        </div>
        <div>
          <dt>가격</dt>
          <dd>{data.price?.toLocaleString()}원</dd>
        </div>
      </dl>
      <p>제품 설명</p>
    </div>
  );
}
