import React from 'react';
import './ProductList.css';
import Header from '../../components/common/header/Header';
import ProductDetailCard from '../../components/productDetailCard/ProductDetailCard';
import NavBar from '../../components/common/navBar/NavBar';

export default function ProductList() {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <ProductDetailCard />
        </li>
        <li>
          <ProductDetailCard />
        </li>
        <li>
          <ProductDetailCard />
        </li>
      </ul>
      <NavBar />
    </div>
  );
}
