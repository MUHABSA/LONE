import React, { useContext, useEffect } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { IsLoginContext } from '../../context/IsLoginContext';

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
    <button type="button" onClick={logOut}>
      로그아웃
    </button>
  );
}
