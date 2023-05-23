import React from 'react';
import './MagazineDetail.css';
import NavBar from '../../components/common/navBar/NavBar';
import MagazineArticle from '../../components/magazineArticle/MagazineArticle';

export default function MagazineDetail() {
  return (
    <div>
      <MagazineArticle />
      <NavBar />
    </div>
  );
}
