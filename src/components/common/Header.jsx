import React from 'react';
import { useMatch, useNavigate } from 'react-router';
import SearchBar from '../SearchBar';
import LogoutBtn from './LogoutBtn';
import styled from 'styled-components';

const ListHeader = styled.h1`
  letter-spacing: 3px;
  font-weight: 500;
  font-size: 18px;
  margin-left: 20px;
  margin-bottom: 30px;
`;

export default function Header() {
  const navigate = useNavigate();
  const matchMap = useMatch('/map');
  const matchProductList = useMatch('/productList');
  const matchProductDetail = useMatch('/product/:id');
  const matchMyPage = useMatch('/myPage');

  return (
    <header>
      {matchMap ? <SearchBar /> : null}
      {matchProductList ? <ListHeader>전통주 모아보기</ListHeader> : null}
      {matchProductDetail ? (
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      ) : null}
      {matchMyPage ? (
        <div>
          <h3>전통주 스크랩북</h3>
          <LogoutBtn />
        </div>
      ) : null}
    </header>
  );
}
