import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Firebase';
import ProductCard from '../common/productCard/ProductCard';

export default function ScrapBook() {
  const [likedItems, setLikedItems] = useState();

  useEffect(() => {
    const getLikedlikedItems = async () => {
      try {
        const q = query(collection(db, 'products'), where('liked', '==', true));
        const querySnapshot = await getDocs(q);
        setLikedItems(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
      } catch (e) {
        console.log(e);
      }
    };
    getLikedlikedItems();
  }, []);

  return (
    <ul>
      {likedItems?.map((item) => (
        <li>
          <ProductCard data={item} />
        </li>
      ))}
    </ul>
  );
}
