import React from "react";
import MovieCard from "./Components/MovieCard";
const App = () => {
  return <>
  <MovieCard movie={{title: "Inception", release_date: "2010", url: "https://example.com/inception.jpg"}} />
  </>;
};

export default App;
