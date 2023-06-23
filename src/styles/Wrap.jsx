import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 412px;
  /* height: 100vh; */
  background: #f9f6fe;
  box-shadow: rgba(152, 152, 152, 0.24) 0px 3px 8px;

  @media screen and (max-width: 500px) {
    box-shadow: none;
  }
`;

export { Wrap };
