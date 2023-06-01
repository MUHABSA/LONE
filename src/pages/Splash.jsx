import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import kakaoLogo from '../assets/img/kakao-login-logo.png';
import splashBg from '../assets/img/bg-splash.png';

const SplashWrap = styled.div`
  background-image: url(${splashBg});
  background-size: cover;
  min-height: 100vh;
  width: 100%;
`;

const Logo = styled.img`
  width: 85%;
  margin-top: 15%;
  margin-bottom: 10px;
`;

const SplashText = styled.p`
  font-size: 16px;
  letter-spacing: 5px;
  margin-bottom: 20%;
`;

const LoginBtn = styled.button`
  background-color: #fee500;
  width: 60%;
  padding: 2px 0;
  border-radius: 25px;
  border: none;
  &:last-child {
    //임시 스타일링
    margin-top: 10px;
    background-color: #ddc9fd70;
  }
`;

const KakaoLogo = styled.img`
  display: inline;
  margin: 0px 10px;
  width: 18px;
  vertical-align: top;
`;

const LoginTxt = styled.h1`
  font-size: 16px;
  text-align: center;
  color: #000;
  font-weight: normal;
`;

export default function Splash() {
  const navigate = useNavigate();
  return (
    <SplashWrap>
      <Logo src={logo} />
      <SplashText>전통주로 로컬을 잇다, 로네</SplashText>
      <LoginBtn>
        <LoginTxt>
          <KakaoLogo src={kakaoLogo} />
          카카오로 시작하기
        </LoginTxt>
      </LoginBtn>
      <LoginBtn onClick={() => navigate('/login')}>
        <LoginTxt>이메일 로그인</LoginTxt>
      </LoginBtn>
    </SplashWrap>
  );
}