import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../Firebase';
import Header from '../components/common/Header';
import ProductDetailCard from '../components/ProductDetailCard';
import NavBar from '../components/common/NavBar';
import CategoryNav from '../components/CategoryNav';
import styled from 'styled-components';

const PLSection = styled.ul`
  display: flex;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 5px;
  padding-bottom: 70px;
`;

const PLList = styled.li`
  display: inline-block;
`;

export default function ProductList() {
  const [category, setCategory] = useState('막걸리');
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(collection(db, 'products'), orderBy('product_name'));
        const querySnapshot = await getDocs(q);
        setProductData(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
      } catch (e) {
        alert('error');
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      <CategoryNav setCategory={setCategory} />

      <PLSection>
        {productData
          ?.filter((item) => item.category === category)
          .map((item) => (
            <PLList key={item.product_id}>
              <ProductDetailCard productDetail={item} />
            </PLList>
          ))}
      </PLSection>

      <NavBar />
    </div>
  );
}
