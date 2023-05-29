import React, { useState } from 'react';
import Header from '../components/common/Header';
import ProductDetailCard from '../components/ProductDetailCard';
import NavBar from '../components/common/NavBar';
import CategoryNav from '../components/CategoryNav';

export default function ProductList({ productData }) {
  const [category, setCategory] = useState('막걸리');

  return (
    <div>
      <Header />
      <CategoryNav setCategory={setCategory} />

      <ul>
        {productData
          ?.filter((item) => item.category === category)
          .sort((a, b) =>
            a.product_name.toLowerCase() < b.product_name.toLowerCase()
              ? -1
              : 1,
          )
          .map((item) => (
            <li key={item.product_id}>
              <ProductDetailCard productDetail={item} />
            </li>
          ))}
      </ul>
      <NavBar />
    </div>
  );
}
