import React from 'react';
import { useNavigate } from 'react-router';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            navigate('/home');
          }}
        >
          홈
        </li>
        <li
          onClick={() => {
            navigate('/map');
          }}
        >
          지도
        </li>
        <li
          onClick={() => {
            navigate('/productList');
          }}
        >
          모아보기
        </li>
        <li
          onClick={() => {
            navigate('/myPage');
          }}
        >
          마이페이지
        </li>
      </ul>
    </nav>
  );
}
