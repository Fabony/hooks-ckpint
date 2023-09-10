import React from 'react';
import './Moviecard.css'
import { Link, useNavigate } from 'react-router-dom';


const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  return (
    <div className="movie-card">
      <img  className="image"  src={movie.posterURL} alt={movie.title} />
      <h2 className='title'>{movie.title}</h2>
      <p className='desc'>{movie.description}</p>
      <p className='rate'>Rating: {movie.rating}</p>
      <p className='trailer'>
        <nav>
        <Link to='Tpage '> Trailer Page</Link>
        </nav>
        <button onClick={()=>navigate('Tpage')}>Trailer</button>
        </p>
    </div>
  );
};

export default MovieCard;
