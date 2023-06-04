import React, { useEffect, useRef, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase';
import LikeBtn from './common/LikeBtn';
import { useNavigate } from 'react-router-dom';

export default function RankItemInfo({ data, rank }) {
  const navigate = useNavigate();
  const buttonRef = useRef();
  const [productId, setProductId] = useState(data.product_id);
  const [isLiked, setIsLiked] = useState(data.liked);
  const [likeCount, setLikeCount] = useState(data.likeCount);

  useEffect(() => {
    const getCurrentProductData = async () => {
      try {
        const q = query(
          collection(db, 'products'),
          where('product_id', '==', productId),
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setProductId(doc.id);
        });
      } catch (e) {
        console.log(e);
      }
    };
    getCurrentProductData();
  }, []);

  const handleClick = (e) => {
    if (e.target !== buttonRef.current) {
      navigate(`/product/${data.product_id}`);
    }
  };

  return (
    <div onClick={handleClick}>
      <p>{rank + 1}</p>
      <img src={data.image} alt="" />
      <strong>{data.product_name}</strong>
      <p>{data.seller}</p>
      <p>
        <span>{likeCount}</span>명이 연결됐어요
      </p>
      <LikeBtn
        ref={buttonRef}
        productId={productId}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        likeCount={likeCount}
        setLikeCount={setLikeCount}
      />
    </div>
  );
}
