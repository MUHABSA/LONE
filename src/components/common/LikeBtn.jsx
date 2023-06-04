import React, { forwardRef } from 'react';
import { useMatch } from 'react-router-dom';
import { db } from '../../Firebase';
import { doc, updateDoc } from 'firebase/firestore';

const LikeBtn = forwardRef(
  ({ productId, isLiked, setIsLiked, likeCount, setLikeCount }, ref) => {
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
      <button onClick={handleClickLikeBtn} ref={ref}>
        {matchProductDetail ? (
          <span>마셔봤어요! 연결할래요</span>
        ) : (
          <span>마셔봤어요 토글 버튼 ir</span>
        )}
      </button>
    );
  },
);

export default LikeBtn;
