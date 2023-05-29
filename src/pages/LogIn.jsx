import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { IsLoginContext } from '../context/IsLoginContext';

export default function LogIn() {
  const auth = getAuth();
  const { isLogin, setIsLogin } = useContext(IsLoginContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      alert('아이디 혹은 비밀번호를 확인하세요');
      console.log(e);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      navigate('/home');
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          이메일
          <input
            type="text"
            onChange={handleChangeEmail}
            value={email}
            placeholder="이메일을 입력해주세요"
          />
        </label>
        <br />
        <label htmlFor="">
          비밀번호
          <input
            type="password"
            onChange={handleChangePassword}
            value={password}
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
          />
        </label>
        <button type="button" onClick={login}>
          로그인
        </button>
      </form>
    </div>
  );
}
