import React from 'react';
import { useMatch } from 'react-router';
import SearchBar from '../../searchBar/SearchBar';
import LogoutBtn from '../logoutBtn/LogoutBtn';

export default function Header() {
  const matchMap = useMatch('/map');
  const matchProductList = useMatch('/productList');
  const matchProductDetail = useMatch('/product/:id');
  const matchMyPage = useMatch('/myPage');

  return (
    <header>
      {matchMap ? <SearchBar /> : null}
      {matchProductList ? <h3>전통주 모아보기</h3> : null}
      {matchProductDetail ? <button>뒤로가기</button> : null}
      {matchMyPage ? (
        <div>
          <h3>전통주 스크랩북</h3>
          <LogoutBtn />
        </div>
      ) : null}
    </header>
  );
}
