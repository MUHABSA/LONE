import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { IsLoginContext } from '../context/IsLoginContext';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 30px;
`;

const Title = styled.h1`
  font-size: 22px;
  letter-spacing: 5px;
  margin-bottom: 100px;
  text-align: left;
  line-height: 1.4;
  color: #7c6add;
`;

const Label = styled.label`
  font-size: 14px;
  display: block;
  text-align: left;
  font-weight: bold;
  color: #7c6add;
`;

const LoginInput = styled.input`
  padding: 14px 24px;
  margin: 12px 0 40px;
  width: 100%;
  border-radius: 26px;
  border: 1px solid #be98fd;
  background-color: #f4edff;
  transition: all 0.2s;
  &:focus {
    outline: none;
    border: 1px solid #be98fd;
    box-shadow: 0 0 4px #ae8de4;
  }
`;

const LoginBtn = styled.button`
  margin-top: 30px;
  padding: 12px 0px;
  width: 100%;
  height: 48px;
  background: #be98fd;
  border-radius: 24px;
  border: none;
  color: white;
  font-size: 14px;
  letter-spacing: 3px;
`;

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
    <LoginContainer>
      <Title>
        안녕하세요! <br />
        로네에 오신 것을 환영해요 🥂
      </Title>

      <form onSubmit={handleSubmit}>
        <Label htmlFor="">
          이메일
          <LoginInput
            type="text"
            onChange={handleChangeEmail}
            value={email}
            placeholder="이메일을 입력해주세요"
          />
        </Label>
        <br />
        <Label htmlFor="">
          비밀번호
          <LoginInput
            type="password"
            onChange={handleChangePassword}
            value={password}
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
          />
        </Label>
        <LoginBtn type="button" onClick={login}>
          로그인
        </LoginBtn>
      </form>
    </LoginContainer>
  );
}
