import React from 'react';
import './Home.css';
import NavBar from '../../components/common/navBar/NavBar';
import ProductRank from '../../components/productRank/ProductRank';
import MagazineCarousel from '../../components/magazineCarousel/magazineCarousel';

export default function Home({ productData }) {
  return (
    <div>
      <MagazineCarousel />
      <ProductRank productData={productData} />
      <NavBar />
    </div>
  );
}
