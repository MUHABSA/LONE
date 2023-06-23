import React, { useState } from 'react';
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
  const categories = ['막걸리', '증류주', '약주', '와인', '기타'];
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleActive = (e) => {
    setActiveIndex(e.target.value);
  };

  return (
    <NavSection>
      <ul>
        {categories.map((item, index) => (
          <NavContent
            value={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={(e) => {
              setCategory(item);
              toggleActive(e);
            }}
          >
            {item}
          </NavContent>
        ))}
      </ul>
    </NavSection>
  );
}
