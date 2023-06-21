import React from 'react';
import styled from 'styled-components';

const NavSection = styled.nav`
  margin: 0 auto;
  padding: 0 8px;
`;

const NavContent = styled.li`
  display: inline-block;
  margin: 0 8px;
  padding: 5px 10px;
  background: #e4e4e4;
  color: #4d4d4d;
  border-radius: 20px;
  font-size: 13px;
  letter-spacing: 3px;
  text-align: center;

  &:hover {
    background: #9f92e9;
    color: white;
  }

  &.active {
    background: #7c6add;
    color: white;
  }
`;

export default function CategoryNav({ setCategory }) {
  return (
    <NavSection>
      <ul>
        <NavContent
          onClick={() => {
            setCategory('막걸리');
          }}
        >
          막걸리
        </NavContent>
        <NavContent
          onClick={() => {
            setCategory('증류주');
          }}
        >
          증류주
        </NavContent>
        <NavContent
          onClick={() => {
            setCategory('약주');
          }}
        >
          약주
        </NavContent>
        <NavContent
          onClick={() => {
            setCategory('와인');
          }}
        >
          와인
        </NavContent>
        <NavContent
          onClick={() => {
            setCategory('기타');
          }}
        >
          기타
        </NavContent>
      </ul>
    </NavSection>
  );
}
