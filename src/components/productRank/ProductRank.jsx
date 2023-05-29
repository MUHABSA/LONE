import React from 'react';
import RankItemInfo from '../rankItemInfo/RankItemInfo';
import { useNavigate } from 'react-router-dom';

export default function ProductRank({ productData }) {
  const navigate = useNavigate();

  const MAX_NUM = 3;
  const sortedByLikeCount = [...productData].sort(
    (a, b) => b.likeCount - a.likeCount,
  );
  const rankData = sortedByLikeCount.slice(0, MAX_NUM);

  return (
    <section>
      <h3>랭킹</h3>
      <ol>
        {rankData.map((item, index) => (
          <li key={item.product_id}>
            <RankItemInfo productData={item} rank={index} />
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
