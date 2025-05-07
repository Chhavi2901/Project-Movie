import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
        <Link to="/">Movie Land</Link>
        </div>
        <div>
            <Link to="/" className='nav-link'>HOME  </Link>
            <Link to="/favorites" className='nav-link'>Favorites</Link>
        </div>
    </nav>
  )
}

export default Navbar