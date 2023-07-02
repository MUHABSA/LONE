import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/img/logo.png';
import kakaoLogo from '../assets/img/kakao-login-logo.png';
import splashBg from '../assets/img/bg-splash.png';

const splashLogo = keyframes`
  from {
    opacity: 0.5;
    transform: translateY(40px);
  } 
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

const splashBtn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const SplashWrap = styled.div`
  background-image: url(${splashBg});
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  text-align: center;
`;

const Logo = styled.img`
  width: 85%;
  margin-top: 15%;
  margin-bottom: 10px;

  &.openSplash {
    animation: ${splashLogo} 0.7s ease-in-out forwards;
  }
`;

const SplashText = styled.p`
  font-size: 16px;
  letter-spacing: 5px;
  margin-bottom: 20%;

  &.openSplash {
    animation: ${splashLogo} 0.7s ease-in-out forwards;
  }
`;

const LoginBtn = styled.button`
  opacity: 0;
  background-color: #fee500;
  width: 60%;
  padding: 4px 0;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  &:last-child {
    margin-top: 10px;
    background-color: #ddc9fd70;
  }
  &.changeOpacity {
    animation: ${splashBtn} 0.7s 0.7s ease-in-out forwards;
  }
`;

const KakaoLogo = styled.img`
  display: inline;
  margin: 0px 10px;
  width: 14px;
  vertical-align: top;

  &.changeOpacity {
    animation: ${splashBtn} 0.7s 0.7s ease-in-out forwards;
  }
`;

const LoginTxt = styled.h1`
  font-size: 12px;
  text-align: center;
  color: #000;
  font-weight: normal;
  letter-spacing: 1px;
`;

export default function Splash() {
  const navigate = useNavigate();
  const [logoAnimation, sestLogoAnimation] = useState('');
  const [btnAnimation, setBtnAnimation] = useState('');

  useEffect(() => {
    sestLogoAnimation('openSplash');
    setBtnAnimation('changeOpacity');
  }, []);

  return (
    <SplashWrap>
      <Logo src={logo} className={logoAnimation} />
      <SplashText className={logoAnimation}>
        전통주로 로컬을 잇다, 로네
      </SplashText>
      <LoginBtn className={btnAnimation}>
        <LoginTxt>
          <KakaoLogo src={kakaoLogo} />
          카카오로 시작하기
        </LoginTxt>
      </LoginBtn>
      <LoginBtn onClick={() => navigate('/login')} className={btnAnimation}>
        <LoginTxt>이메일 로그인</LoginTxt>
      </LoginBtn>
    </SplashWrap>
  );
}
