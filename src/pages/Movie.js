import React from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Title</h1>
      <p>Movie Time</p>
      <span>Genre</span>
      {/* Fetch and render movie details based on id */}
    </div>
  );
};

export default Movie;
