import React from 'react'
import "../css/Favorites.css"

const Favorites = () => {
  return (
    <div className='favorite-empty'>
        <h1>Favorites</h1>
        <p>You have no favorite movies yet.</p>
        <p>Click the heart icon on a movie card to add it to your favorites.</p>
        <p>Once you add movies to your favorites, they will appear here.</p>
    </div>
  )
}

export default Favorites