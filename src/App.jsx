import React, { useState } from 'react';
import MovieList from './Components/Movielist'
import Filter from './Components/Filter'
import './App.css'
import {Routes, Route }  from 'react-router-dom'
import  Video from './Components/Video'



const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'MORTAL ENGINES',
      description: 'Mortal Engines has no shortage of eye-catching special effects,but lacks enough high-octane narrative fuel to give this futuristic fantasy sufficient cinematic combustion.',
      posterURL: 'https://flxt.tmsimg.com/assets/p13572826_v_h8_aa.jpg',
      rating: 4.5,
      trailer: ''
    },

    {
      title: 'Expendables 3',
      description: `The Expendables 3, the third entry in Sylvester Stallone's action movie old folks home which has been distracting us with its very crowded poster, comes out this weekend.`,
      posterURL: 'https://cdn.theplaylist.net/wp-content/uploads/2021/08/14173610/The-Expendables-3.jpg',
      rating: 4.8,
    },

    {
      title: 'Blue Beetle',
      description: "Jaime Reyes suddenly finds himself in possession of an ancient relic of alien biotechnology called the Scarab. When the Scarab chooses Jaime to be its symbiotic host, he's bestowed with an incredible suit of armor that's capable of extraordinary and unpredictable powers",
      posterURL: 'https://resizing.flixster.com/LgqqVAIyA2K_E86lNuD8Uu_02yw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZlNmZjZjM3LTg4ODctNDFiYi04NjZjLTIyOGViYjU1ZDU4Mi5qcGc=',
      rating: 4.9,

    },

    {
      title: 'AVATAR',
      description: 'Mortal Engines has no shortage of eye-catching special effects,but lacks enough high-octane narrative fuel to give this futuristic fantasy sufficient cinematic combustion.',
      posterURL: 'https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg',
      rating: 4.5,
    },

    {
      title: 'The Last Kingdom: Seven Kings Must Die',
      description: "The Netflix drama based on Bernard Cornwell's popular historical novels ends with a film that sees the machinations of invading Danish warrior king Anlaf pose a new threat to the dream of a united England",
      posterURL:'https://fictionhorizon.com/wp-content/uploads/2023/03/The-Last-Kingdom-Seven-Kings-Must-Die-and-Vikings-Posters-Watch-Order-collage-1.jpg',
      rating: 4.5,
    },
    
  ]);

  const [filteredMovies, setFilteredMovies] = useState([...movies]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  const filterMovies = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating.toString().includes(rating)
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1 className='head'>Movie Catalog</h1>
      <Filter onFilter={filterMovies} />
      <Routes>
        <Route path ='/' element={<MovieList movies={filteredMovies}/>}/>
         <Route path='/Tpage' element={<Video  />} />
        
      </Routes>
      <button onClick={() => addMovie({ title: 'New Movie', description: 'New Description', posterURL: 'newPoster.jpg', rating: 3.0 })}>Add Movie</button>
    </div>
  );
};

export default App;
