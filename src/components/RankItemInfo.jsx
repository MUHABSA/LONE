import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase';
import LikeBtn from './common/LikeBtn';
import { useNavigate } from 'react-router-dom';
import linkImg from '../assets/img/link.png';

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 10px;
  margin-bottom: 8px;
`;

const LeftItem = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  height: 92px;
  border-radius: 16px;
  padding-left: 5px;
  margin-bottom: 8px;
  background: #fff;
  border: #eeeeee 1px solid;
  align-items: center;
  box-shadow: rgba(190, 190, 190, 0.24) 0px 1px 6px;
`;
const ItemNumber = styled.div`
  position: relative;
  left: 10px;
  font-weight: 700;
  font-size: 34px;
  color: #8070df;
  font-family: 'Cafe24Ssurround';
`;

const ItemImg = styled.img`
  flex-grow: 2;
  height: 90px;
`;
const LinkImg = styled.img`
  width: 8px;
  height: 18px;
  flex-grow: 1;
  margin: 40px 10px 10px;
`;

const RightItem = styled.div`
  display: flex;
  flex-grow: 4;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 50%;
  height: 77px;
  border-radius: 16px;
  padding: 0px 16px 10px;
  margin-top: 13px;
  margin-bottom: 8px;
  background: #fff;
  border: #eeeeee 1px solid;
  box-shadow: rgba(190, 190, 190, 0.24) 0px 1px 6px;
`;

const RightInner = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemName = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 2px;
  color: #8070df;
  font-family: 'Cafe24Ssurround';
`;

const ItemInfo = styled.p`
  font-weight: 300;
  line-height: 130%;
  font-size: 13px;
  flex-shrink: 1;
  margin-top: 0px;
  margin-bottom: 2px;
  color: #858899;
`;

const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 260px;
  align-items: center;
`;

const LikeCount = styled.p`
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 2px;
  flex-shrink: 1;
  text-align: right;
  margin-right: 5px;
`;

export default function RankItemInfo({ data, rank }) {
  const navigate = useNavigate();
  const buttonRef = useRef();
  const [productId, setProductId] = useState(data.product_id);
  const [isLiked, setIsLiked] = useState(data.liked);
  const [likeCount, setLikeCount] = useState(data.likeCount);

  useEffect(() => {
    const getCurrentProductData = async () => {
      try {
        const q = query(
          collection(db, 'products'),
          where('product_id', '==', productId),
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setProductId(doc.id);
        });
      } catch (e) {
        console.log(e);
      }
    };
    getCurrentProductData();
  }, []);

  const handleClick = (e) => {
    if (e.target !== buttonRef.current) {
      navigate(`/product/${data.product_id}`);
    }
  };

  return (
    <ItemContainer onClick={handleClick}>
      <LeftItem>
        <ItemNumber>{rank + 1}</ItemNumber>
        <ItemImg src={data.image} alt="" />
      </LeftItem>
      <LinkImg src={linkImg} />
      <RightItem>
        <ItemName>{data.product_name}</ItemName>
        <RightInner>
          <ItemInfo>{data.seller}</ItemInfo>
          <LikeContainer>
            <LikeCount>
              <span>{likeCount}</span>명이 연결됐어요
            </LikeCount>
            <LikeBtn
              ref={buttonRef}
              productId={productId}
              isLiked={isLiked}
              setIsLiked={setIsLiked}
              likeCount={likeCount}
              setLikeCount={setLikeCount}
            />
          </LikeContainer>
        </RightInner>
      </RightItem>
    </ItemContainer>
  );
}
