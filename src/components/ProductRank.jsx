import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../Firebase';
import RankItemInfo from './RankItemInfo';

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
    <section>
      <h3>랭킹</h3>
      <ol>
        {rankData?.map((item, index) => (
          <li key={item.product_id}>
            <RankItemInfo data={item} rank={index} />
          </li>
        ))}
      </ol>
      <button
        onClick={() => {
          navigate('/productList');
        }}
      >
        연결 가능한 전통주 보러가기
      </button>
    </section>
  );
}
