import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase';
import ProductCard from './common/ProductCard';
import styled from 'styled-components';

const ScrapSection = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const SProductSection = styled.ul`
  margin: 0 auto;
  display: flex;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 10px;

  li {
    display: inline-block;
  }
`;
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
    <ScrapSection>
      <p>내가 연결한 전통주를 확인해보세요!</p>
      <SProductSection>
        {likedItems?.map((item) => (
          <li>
            <ProductCard data={item} />
          </li>
        ))}
      </SProductSection>
    </ScrapSection>
  );
}
