import React from 'react';
import './MyPage.css';
import Header from '../../components/common/header/Header';
import ScrapBook from '../../components/scrapBook/ScrapBook';
import NavBar from '../../components/common/navBar/NavBar';

export default function MyPage() {
  return (
    <div>
      <Header />
      <ScrapBook />
      <NavBar />
    </div>
  );
}
