import React from 'react';

export default function CategoryNav({ setCategory }) {
  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            setCategory('막걸리');
          }}
        >
          막걸리
        </li>
        <li
          onClick={() => {
            setCategory('증류주');
          }}
        >
          증류주
        </li>
        <li
          onClick={() => {
            setCategory('약주');
          }}
        >
          약주
        </li>
        <li
          onClick={() => {
            setCategory('와인');
          }}
        >
          와인
        </li>
        <li
          onClick={() => {
            setCategory('기타');
          }}
        >
          기타
        </li>
      </ul>
    </nav>
  );
}
