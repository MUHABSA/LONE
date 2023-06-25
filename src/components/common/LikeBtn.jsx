import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useMatch } from 'react-router-dom';
import { db } from '../../Firebase';
import { doc, updateDoc } from 'firebase/firestore';
import likedBtn from '../../assets/img/logo.png';
import unlikedBtn from '../../assets/img/logo-gray.png';
import DetailLikedBtn from '../../assets/img/pd-active.png';
import DetailUnlikedBtn from '../../assets/img/pd.png';

//unlikedBtn 변수에 회색 이미지 경로 넣으면 됩니다

const LikeButtonMain = styled.button`
  //메인페이지에서 보이는 버튼 스타일링
  background: url(${(props) => (props.isLiked ? likedBtn : unlikedBtn)});
  background-size: contain;
  width: 31px;
  height: 30px;
  border: none;
  cursor: pointer;
`;

const LikeButtonDetail = styled.button`
  //상세보기 페이지에 들어가는 버튼 스타일링은 여기다 하면 됩니다
  background: url(${(props) => (props.isLiked ? DetailLikedBtn : DetailUnlikedBtn)}) no-repeat;
  background-size: contain;
  width: 210px;
  height: 40px;
  border: none;
  cursor: pointer;
`;

const LikeBtn = forwardRef(({ productId, isLiked, setIsLiked, likeCount, setLikeCount }, ref) => {
  const handleClickLikeBtn = async (e) => {
    e.stopPropagation();
    const productRef = doc(db, 'products', productId);
    try {
      if (isLiked) {
        await updateDoc(productRef, {
          likeCount: likeCount - 1,
          liked: !isLiked,
        });
        setLikeCount(likeCount - 1);
        setIsLiked(!isLiked);
      } else {
        await updateDoc(productRef, {
          likeCount: likeCount + 1,
          liked: !isLiked,
        });
        setLikeCount(likeCount + 1);
        setIsLiked(!isLiked);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const matchProductDetail = useMatch('/product/:id');

  return (
    <>
      {matchProductDetail ? (
        <LikeButtonDetail onClick={handleClickLikeBtn} ref={ref} isLiked={isLiked} />
      ) : (
        <LikeButtonMain onClick={handleClickLikeBtn} ref={ref} isLiked={isLiked}></LikeButtonMain>
      )}
    </>
  );
});

export default LikeBtn;
