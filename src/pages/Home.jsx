import React, { use } from "react";
import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import { getPolpularMovies, searchMovies } from "../services/api";
import "../css/Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPolpularMovies(); 
        setMovies(data); 
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false); 
      }
    };
    fetchMovies(); // Call the fetchMovies function to initiate fetching
  }, []); // Empty dependency array means this effect runs once on component mount




  
  const handleSubmission = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior and page reload

    console.log(searchTerm);
    if (searchTerm.trim() === "") return; // If the search term is empty, do nothing
    if (loading) return; // If loading, do nothing
    setLoading(true); // Set loading to true while fetching search results

    try {
      const fetchSearchResults = await searchMovies(searchTerm);
      setMovies(fetchSearchResults);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }

    setSearchTerm("");
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSubmission}>
        <input
          type="text"
          placeholder="Search for movies...."
          className="search-input"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <h1>Error: {error.message}</h1>}{" "}
      {/* Show error message if any */}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            // Filter movies based on the search term i.e. conditionally render the MovieCard component
            //searchterm is a state variable whenever it changes the home component re-renders
            //   movie.title.toLowerCase().startswith(searchTerm.toLowerCase()) &&
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
      {/* Show loading message while fetching movies */}
    </div>
  );
};

export default Home;
