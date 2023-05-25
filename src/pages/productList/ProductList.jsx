import React, { useState } from 'react';
import './ProductList.css';
import Header from '../../components/common/header/Header';
import ProductDetailCard from '../../components/productDetailCard/ProductDetailCard';
import NavBar from '../../components/common/navBar/NavBar';
import CategoryNav from '../../components/catetoryNav/CategoryNav';

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
