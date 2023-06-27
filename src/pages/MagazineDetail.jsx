import React from 'react';
import NavBar from '../components/common/NavBar';
import MagazineArticle from '../components/MagazineArticle';
import { useLocation } from 'react-router';

export default function MagazineDetail() {
  const location = useLocation();
  return (
    <div>
      <MagazineArticle data={location.state} />
      <NavBar />
    </div>
  );
}
