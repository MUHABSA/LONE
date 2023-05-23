import React from 'react';
import RankItemInfo from '../rankItemInfo/RankItemInfo';

export default function ProductRank() {
  return (
    <section>
      <h3>랭킹</h3>
      <ol>
        <li>
          <RankItemInfo />
        </li>
        <li>
          <RankItemInfo />
        </li>
        <li>
          <RankItemInfo />
        </li>
      </ol>
      <button>더보기</button>
    </section>
  );
}
