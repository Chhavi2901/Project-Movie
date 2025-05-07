import React from 'react'
import MovieCard from '../Components/MovieCard';
import { useState } from 'react';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const movies = [
        {   id:1,
            title: "Inception",
            release_date: "2010",
            url: "https://example.com/inception.jpg"
        },
        {  id:2,
            title: "The Dark Knight",
            release_date: "2008",
            url: "https://example.com/dark-knight.jpg"
        },
        {   id:3,
            title: "Interstellar",
            release_date: "2014",
            url: "https://example.com/interstellar.jpg"
        }
    ];
  const handleSubmission = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior and page reload
    console.log(searchTerm);
    setSearchTerm(""); // Clear the input field after submission
  }



  return (
    <div className='home'>
        <form className='search-form' onSubmit={handleSubmission}>
            <input type="text" placeholder='Search for movies....' className='search-input' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
            <button type="submit" className='search-button'>Search</button>
        </form>
        <div className='movie-grid'>
            {movies.map((movie) => (
                // Filter movies based on the search term i.e. conditionally render the MovieCard component
                //searchterm is a state variable whenever it changes the home component re-renders
                movie.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
                (<MovieCard movie={movie} key={movie.id}/>)
            ))}
        </div>
    </div>
  )
}

export default Home