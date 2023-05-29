import React from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/img/home.svg';
import { ReactComponent as Cheers } from '../../assets/img/arrow.svg';
import { ReactComponent as Locator } from '../../assets/img/locator.svg';
import { ReactComponent as My } from '../../assets/img/user.svg';

export default function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const NavWrap = styled.nav`
    max-width: 412px;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 10;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    box-shadow: 0px -2px 2px rgba(244, 244, 244);
    background: #ffffff;

    ul {
      display: flex;
      width: 90%;
      justify-content: space-around;
      align-items: center;
      list-style: none;
    }

    li {
      cursor: pointer;
    }
  `;

  return (
    <NavWrap>
      <ul>
        <li
          onClick={() => {
            navigate('/home');
          }}
        >
          <Home
            width="20"
            height="20"
            fill={pathname === '/home' ? '#be98fd' : '#dbdbdb'}
          />
        </li>
        <li
          onClick={() => {
            navigate('/map');
          }}
        >
          <Locator
            width="20"
            height="20"
            fill={pathname === '/map' ? '#be98fd' : '#dbdbdb'}
          />
        </li>
        <li
          onClick={() => {
            navigate('/productList');
          }}
        >
          <Cheers
            width="20"
            height="20"
            fill={pathname === '/productList' ? '#be98fd' : '#dbdbdb'}
          />
        </li>
        <li
          onClick={() => {
            navigate('/myPage');
          }}
        >
          <My
            width="23"
            height="23"
            fill={pathname === '/myPage' ? '#be98fd' : '#dbdbdb'}
          />
        </li>
      </ul>
    </NavWrap>
  );
}
