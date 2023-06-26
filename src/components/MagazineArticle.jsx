import React from 'react';
import styled from 'styled-components';

const MagContainer = styled.article`
  height: 100%;
  box-shadow: none;
`;

const MagImg = styled.img`
  width: 100%;
  margin-bottom: 50px;
`;

// 스타일링 완료되면 삭제해주세요
// const MagTextSection = styled.div`
//   padding: 0 20px;
// `;

// const MagAuthor = styled.p`
//   font-size: 12px;
//   letter-spacing: 3px;
//   text-align: left;
// `;

// const MagTitle = styled.h1`
//   font-size: 22px;
//   letter-spacing: 2px;
//   text-align: left;
// `;

// const MagContent = styled.p`
//   font-size: 14px;
//   letter-spacing: 2px;
//   text-align: left;
// `;

export default function MagazineDetail({ data }) {
  return (
    <MagContainer>
      <MagImg src={data.image_contents} alt={data.alt} />
      {/* 스타일링 완료되면 삭제해주세요
      <MagTextSection>
        <MagAuthor>{data.author}</MagAuthor>
        <MagTitle>{data.title}</MagTitle>
        <MagContent>{data.contents}</MagContent>
      </MagTextSection> */}
    </MagContainer>
  );
}
