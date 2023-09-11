import React from 'react';
import '../css-styles/Gallery.scss'

const GalleryItem = ({ item }) => (
  <div className="gallery-item">
    <img src={item.imageUrl} alt={item.title} />
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      Voir plus
    </a>
  </div>
);

const Gallery = ({ data }) => (
  <div className="gallery">
    {data.map(item => (
      <GalleryItem key={item.id} item={item} />
    ))}
  </div>
);

export default Gallery;