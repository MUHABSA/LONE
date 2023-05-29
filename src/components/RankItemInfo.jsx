import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase';
import LikeBtn from './common/LikeBtn';

export default function RankItemInfo({ data, rank }) {
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

  return (
    <div>
      <p>{rank + 1}</p>
      <img src={data.image} alt="" />
      <strong>{data.product_name}</strong>
      <p>{data.seller}</p>
      <p>
        <span>{likeCount}</span>명이 연결됐어요
      </p>
      <LikeBtn
        productId={productId}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        likeCount={likeCount}
        setLikeCount={setLikeCount}
      />
    </div>
  );
}
