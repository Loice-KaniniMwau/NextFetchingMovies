import React, { useState, useEffect } from 'react';
import { searchMovies } from '@/app/utilities/utils';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery) {
      const results = await searchMovies(searchQuery);
      setSearchResults(results.results || []); // Assuming your API returns results in an array
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
