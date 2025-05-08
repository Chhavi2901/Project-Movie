import { createContext,useEffect,useContext,useState, use } from "react";
const MovieContext = createContext(); // Create a context for movies
export const useMovieContext = () => useContext(MovieContext); // Custom hook to use the MovieContext
export const MovieProvider = ({ children }) => {
    const [favmovies, setFavMovies] = useState([]); // State to store favorite movies
    useEffect(() => {
        const storedMovies = localStorage.getItem("favmovies"); // Retrieve favorite movies from local storage
        if (storedMovies) {
            setFavMovies(JSON.parse(storedMovies)); 
        }
    }, []); 


    useEffect(() => {
        localStorage.setItem("favmovies", JSON.stringify(favmovies)); // Store favorite movies in local storage whenever they change
    }, [favmovies]);


    const addToFav = (movie) => {
        setFavMovies((prev) => [...prev, movie]); // Add a movie to the list of favorite movies
    };


    const removeFromFav = (movieId) => {
        setFavMovies((prev) => prev.filter((movie) => movie.id !== movieId)); // Remove a movie from the list of favorite movies
    };


    const isFav = (movieId) => {
        return favmovies.some((movie) => movie.id === movieId); // Check if a movie is in the list of favorite movies
    };

    
    const val={
        favmovies, // Provide the favorite movies state
        addToFav, // Provide the function to add a movie to favorites
        removeFromFav, // Provide the function to remove a movie from favorites
        isFav, // Provide the function to check if a movie is a favorite
    }
    return (
        <MovieContext.Provider value={val}>
            {children} {/* Render the children components with the provided context values */}
        </MovieContext.Provider>
    );
}
