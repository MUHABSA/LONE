import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../Firebase';
import RankItemInfo from './RankItemInfo';

const ListSection = styled.div`
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  background: #f9f6ff;
  z-index: 2;
  position: relative;
  top: -50px;
  padding-top: 10px;
  padding-bottom: 50px;
  text-align: center;
  box-shadow: #8f81d361 0px 1px 5px;
`;

const ListTitle = styled.p`
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

const ProductBtn = styled.button`
  margin-top: 20px;
  padding: 12px 30px;
  background: #7c6add;
  color: #fff;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 2px;
  position: inline-block;
  border: none;
  box-shadow: rgba(142, 140, 140, 0.838) 0px 1px 6px;
`;

export default function ProductRank() {
  const navigate = useNavigate();
  const [rankData, setRankData] = useState();

  const MAX_NUM = 3;

  useEffect(() => {
    const getRankData = async () => {
      try {
        const q = query(
          collection(db, 'products'),
          orderBy('likeCount', 'desc'),
          limit(MAX_NUM),
        );
        const querySnapshot = await getDocs(q);
        setRankData(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
      } catch (e) {
        alert('error');
        console.log(e);
      }
    };
    getRankData();
  }, []);

  return (
    <ListSection>
      <ListTitle>전국 전통주 랭킹을 확인하고, 전통주와 연결해보세요</ListTitle>
      <ol>
        {rankData?.map((item, index) => (
          <li key={item.product_id}>
            <RankItemInfo data={item} rank={index} />
          </li>
        ))}
      </ol>
      <ProductBtn
        onClick={() => {
          navigate('/productList');
        }}
      >
        연결 가능한 전통주 보러가기
      </ProductBtn>
    </ListSection>
  );
}
