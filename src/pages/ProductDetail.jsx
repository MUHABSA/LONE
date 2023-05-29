import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase';
import Header from '../components/common/Header';
import ProductDetail from '../components/ProductDetail';
import LikeBtn from '../components/common/LikeBtn';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [productId, setProductId] = useState('');
  console.log(productData);
  const [isLiked, setIsLiked] = useState();
  const [likeCount, setLikeCount] = useState();

  useEffect(() => {
    const getCurrentProductData = async () => {
      try {
        const q = query(
          collection(db, 'products'),
          where('product_id', '==', parseInt(id)),
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setProductData(doc.data());
          setProductId(doc.id);
          setLikeCount(doc.data().likeCount);
          setIsLiked(doc.data().liked);
        });
      } catch (e) {
        console.log(e);
      }
    };
    getCurrentProductData();
  }, []);

  return (
    <div>
      <Header />
      <ProductDetail data={productData} />
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
