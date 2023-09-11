import React from 'react';
import { Link } from 'react-router-dom';

function Cards({item}) {
  return (
    <article className='article-cards'>
      <Link to={`/logement/${item.id}`} state={{ item }} className="cards">
      <img src={item.cover} alt={item.title} />
      <h2>{item.title}</h2>
    </Link>
    </article>
    
  );
}

export default Cards;