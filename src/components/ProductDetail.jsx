import React from 'react';
import styled from 'styled-components';

const PDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 10px;
`;

const PDLeft = styled.div`
  width: 38%;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const PDRight = styled.div`
  background: #fff;
  width: 60%;
  border: 1px solid #e5e5e5;
  border-radius: 15px;
  padding: 5px 15px;
  dt {
    float: left;
    margin-right: 30px;
    font-size: 12px;
    letter-spacing: 3px;
    line-height: 1.8;
    font-weight: 600;
  }

  dd {
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 1.8;
  }
`;

const PDName = styled.div`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 3px;
  margin-bottom: 30px;
`;

const PDDetail = styled.div`
  width: 100%;
  background: #fff;
  margin: 20px 0;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 0 15px;
`;

export default function ProductDetail({ data }) {
  return (
    <PDetailContainer>
      <PDLeft>
        <img src={data.image} alt="" />
      </PDLeft>
      <PDRight>
        <dl>
          <div>
            <PDName>{data.product_name}</PDName>
          </div>
          <div>
            <dt>도수</dt>
            <dd>{data.abv}%</dd>
          </div>
          <div>
            <dt>용량</dt>
            <dd>{data.volume}ml</dd>
          </div>
          <div>
            <dt>주종</dt>
            <dd>{data.category}</dd>
          </div>
          <div>
            <dt>생산</dt>
            <dd>{data.seller}</dd>
          </div>
          <div>
            <dt>가격</dt>
            <dd>{data.price?.toLocaleString()}원</dd>
          </div>
        </dl>
      </PDRight>
      <PDDetail>
        <p>제품 설명</p>
      </PDDetail>
    </PDetailContainer>
  );
}
