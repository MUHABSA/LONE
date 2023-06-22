import React from 'react';
import { useMatch, useNavigate } from 'react-router';
import SearchBar from '../SearchBar';
import LogoutBtn from './LogoutBtn';
import styled from 'styled-components';
import Back from '../../assets/img/back.png';

const ListHeader = styled.h1`
  letter-spacing: 3px;
  font-weight: 500;
  font-size: 18px;
  margin-left: 20px;
  margin-bottom: 30px;
`;

const BackBtn = styled.button`
  margin: 15px 10px;
  background: url(${Back});
  width: 8px;
  height: 21px;
  background-size: contain;
  border: none;
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
      {matchProductDetail ? <BackBtn onClick={() => navigate(-1)} /> : null}
      {matchMyPage ? (
        <div>
          <h3>전통주 스크랩북</h3>
          <LogoutBtn />
        </div>
      ) : null}
    </header>
  );
}
