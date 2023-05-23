import React from 'react';
import './Home.css';
import NavBar from '../../components/common/navBar/NavBar';
import ProductRank from '../../components/productRank/ProductRank';
import MagazineCarousel from '../../components/magazineCarousel/magazineCarousel';

export default function Home() {
  return (
    <div>
      <MagazineCarousel />
      <ProductRank />
      <NavBar />
    </div>
  );
}
