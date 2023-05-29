import React from 'react';
import NavBar from '../components/common/NavBar';
import ProductRank from '../components/ProductRank';
import MagazineCarousel from '../components/MagazineCarousel';

export default function Home() {
  return (
    <div>
      <MagazineCarousel />
      <ProductRank />
      <NavBar />
    </div>
  );
}
