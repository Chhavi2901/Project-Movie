import React from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { MovieProvider } from "./contexts/MovieContext";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import "../src/css/App.css";
const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
    </MovieProvider>
  );
};

export default App;
