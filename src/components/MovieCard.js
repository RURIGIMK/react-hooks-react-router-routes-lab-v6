import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, id }) => (
  <div>
    <h2>{title}</h2>
    <Link to={`/movie/${id}`}>See Details</Link>
  </div>
);

export default MovieCard;
