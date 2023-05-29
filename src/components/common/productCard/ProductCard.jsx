import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ data }) {
  return (
    <Link to={`/product/${data.product_id}`}>
      <div>
        <img src={data.image} alt="" />
        <strong>{data.product_name}</strong>
      </div>
    </Link>
  );
}
