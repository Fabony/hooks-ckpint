import React from 'react';
import './Moviecard.css'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img  className="image"  src={movie.posterURL} alt={movie.title} />
      <h2 className='title'>{movie.title}</h2>
      <p className='desc'>{movie.description}</p>
      <p className='rate'>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
