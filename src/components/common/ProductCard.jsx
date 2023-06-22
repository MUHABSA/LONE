import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ScrapImg from '../../assets/img/scrap.png';

const CardSection = styled.div`
  margin: 10px 5px;
  background: #fff;
  text-align: center;
  color: black;
  width: 120px;
  height: 180px;
  border-radius: 20px;
  border: 1px solid #e5e5e5;

  img {
    width: 100%;
    height: 120px;
  }

  p {
    font-size: 12px;
    letter-spacing: 3px;
    color: black;
    padding: 0px 5px 10px;
    margin: 25px 0;
  }
`;

const CardImg = styled.div`
  position: relative;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 12px;
  width: 90px;
  height: 110px;
  padding: 12px 0 9px 0;
`;

const StampImg = styled.img`
  object-fit: cover;
  z-index: 5;
  position: absolute;
  top: 0;
  right: 2px;
`;

export default function ProductCard({ data }) {
  return (
    <Link to={`/product/${data.product_id}`}>
      <CardSection>
        <CardImg>
          <img src={data.image} alt="" />
          {data.liked ? <StampImg src={ScrapImg} /> : null}
        </CardImg>

        <p>{data.product_name}</p>
      </CardSection>
    </Link>
  );
}
