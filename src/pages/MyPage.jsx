import React from 'react';
import Header from '../components/common/Header';
import ScrapBook from '../components/ScrapBook';
import NavBar from '../components/common/NavBar';
import styled from 'styled-components';

const MyPageContainer = styled.div`
  height: 100%;
`;

export default function MyPage() {
  return (
    <MyPageContainer>
      <Header />
      <ScrapBook />
      <NavBar />
    </MyPageContainer>
  );
}
