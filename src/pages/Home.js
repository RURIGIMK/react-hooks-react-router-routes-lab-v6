import React from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <MovieCard title="Movie Title" id="1" />
    {/* Render more MovieCard components here */}
  </div>
);

export default Home;
