import React from 'react';
import styled from 'styled-components';
import Header from './common/Header';

const MagContainer = styled.article`
<<<<<<< HEAD
  height: 100%;
  box-shadow: none;
=======
  min-height: 100vh;
>>>>>>> c95004b5259a622ce7a3120dd44068f0cd0c1e54
`;

const MagImg = styled.img`
  width: 100%;
  margin-bottom: 50px;
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
