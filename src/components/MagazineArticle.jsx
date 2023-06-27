import React from 'react';
import styled from 'styled-components';
import Header from './common/Header';

const MagContainer = styled.article`
  min-height: 100vh;
`;

const MagImg = styled.img`
  width: 100%;
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
`;

export default function MagazineDetail({ data }) {
  return (
    <MagContainer src={data.image_contents}>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MagImg src={data.image_contents} alt={data.alt} />
    </MagContainer>
  );
}
