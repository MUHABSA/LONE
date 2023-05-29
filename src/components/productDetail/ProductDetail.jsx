import React from 'react';
import LikeBtn from '../common/likeBtn/LikeBtn';

export default function ProductDetail() {
  return (
    <div>
      <img src="" alt="" />
      <dl>
        <div>
          <dt>제품명</dt>
          <dd>제품이름</dd>
        </div>
        <div>
          <dt>도수</dt>
          <dd>몇 도</dd>
        </div>
        <div>
          <dt>용량</dt>
          <dd>얼마</dd>
        </div>
        <div>
          <dt>품종</dt>
          <dd>굿종</dd>
        </div>
        <div>
          <dt>생산자</dt>
          <dd>김아무개</dd>
        </div>
        <div>
          <dt>가격</dt>
          <dd>10,000원</dd>
        </div>
      </dl>
      <p>제품 설명</p>
      <LikeBtn />
    </div>
  );
}
