import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PLinkImg from '../assets/img/logo.png';
import LikedImg from '../assets/img/logo.png';
import UnlikedImg from '../assets/img/logo-gray.png';

const ProductDetail = styled.div`
  margin: 20px 10px;
  background: #fff;
  text-align: center;
  color: black;
  width: 180px;
  height: 320px;
  border-radius: 20px;
  border: 1px solid #e5e5e5;
`;

const PLImg = styled.img`
  width: 150px;
  height: 180px;
`;

const PLTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 3px;
  color: black;
  margin: 10px;
`;

const PLSeller = styled.p`
  font-size: 12px;
  letter-spacing: 3px;
  font-weight: 400;
  margin: 1px;
`;

const PLAbv = styled.p`
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: 300;
  margin: 0px;
`;

const PLBottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1px 0;
  margin-top: 24px;
  background: #ebe6fc;
  font-size: 14px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1px solid #e5e5e5;

  p {
    font-weight: 300;
    letter-spacing: 3px;
    margin-right: 3px;
  }

  strong {
    font-weight: 400;
  }
`;

const PLink = styled.img`
  width: 30px;
  height: 30px;
`;

export default function ProductDetailCard({ productDetail }) {
  return (
    <Link to={`/product/${productDetail.product_id}`}>
      <ProductDetail>
        <PLImg src={productDetail.image} alt="" />
        <PLTitle>{productDetail.product_name}</PLTitle>
        <PLSeller>{productDetail.seller}</PLSeller>
        <PLAbv>
          도수 <span>{productDetail.abv}</span>/ml
        </PLAbv>
        <PLBottomSection>
          <p>
            <strong>{productDetail.likeCount}명</strong>이 연결됐어요
          </p>
          <PLink
            src={productDetail.liked ? LikedImg : UnlikedImg}
            alt="로네 링크 이미지"
          />
        </PLBottomSection>
        {/* 모아보기 페이지 좋아요 기능도 넣을 경우 아래 이미지는 추후 버튼으로 변경 */}
      </ProductDetail>
    </Link>
  );
}
