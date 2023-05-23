import React from 'react';
import { useMatch } from 'react-router';

export default function Header() {
  const matchMap = useMatch('/map');
  const matchProductList = useMatch('/productList');
  const matchProductDetail = useMatch('/product/:id');
  const matchMyPage = useMatch('/myPage');

  return (
    <header>
      {matchMap ? <div>검색창, 검색버튼 컴포넌트</div> : null}
      {matchProductList ? <nav>주류 네비게이션 컴포넌트</nav> : null}
      {matchProductDetail ? <button>뒤로가기</button> : null}
      {matchMyPage ? <h3>전통주 스크랩북</h3> : null}
    </header>
  );
}
