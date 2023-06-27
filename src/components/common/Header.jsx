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
  margin-bottom: 20px;
  padding-top: 20px;
  margin-top: 0px;
`;

const BackBtn = styled.button`
  margin: 15px 10px;
  background: url(${Back});
  width: 8px;
  height: 21px;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const CloseBtn = styled.button`
  /* 이부분 사진 url 수정하면 됩니다 */
  background: url(${Back}) no-repeat;
  height: 17px;
  position: relative;
  top: 15px;
  left: 7px;
  background-size: contain;
  border: none;
  cursor: pointer;
  z-index: 3;
`;

export default function Header() {
  const navigate = useNavigate();
  const matchMagazine = useMatch('/magazine/:id');
  const matchMap = useMatch('/map');
  const matchProductList = useMatch('/productList');
  const matchProductDetail = useMatch('/product/:id');
  const matchMyPage = useMatch('/myPage');

  return (
    <header>
      {matchMap ? <SearchBar /> : null}
      {matchProductList ? <ListHeader>전통주 모아보기</ListHeader> : null}
      {matchProductDetail ? <BackBtn onClick={() => navigate(-1)} /> : null}
      {matchMagazine ? <CloseBtn onClick={() => navigate(-1)} /> : null}
      {matchMyPage ? <LogoutBtn /> : null}
    </header>
  );
}
