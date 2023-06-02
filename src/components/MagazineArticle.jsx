import React from 'react';

export default function MagazineDetail({ data }) {
  return (
    <article>
      <header>
        <img src={data.image} alt={data.alt} />
        <p>{data.author}</p>
        <h3>{data.title}</h3>
      </header>
      <p>{data.contents}</p>
    </article>
  );
}
