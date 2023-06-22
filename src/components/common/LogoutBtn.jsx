import React, { useContext, useEffect } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { IsLoginContext } from '../../context/IsLoginContext';
import styled from 'styled-components';

const Logout = styled.div`
  text-align: right;
  padding: 10px;
  font-size: 14px;

  button {
    background: none;
    border: none;
    display: inline-block;
    letter-spacing: 2px;
  }
`;

export default function LogoutBtn() {
  const auth = getAuth();
  const { isLogin, setIsLogin } = useContext(IsLoginContext);

  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    localStorage.setItem('isLogined', false);
    if (!isLogin) {
      navigate('/');
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        localStorage.setItem('isLogined', !!user);
      } else {
        setIsLogin(false);
        localStorage.setItem('isLogined', !!user);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Logout>
      <button type="button" onClick={logOut}>
        로그아웃
      </button>
    </Logout>
  );
}
