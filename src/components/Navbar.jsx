import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-container'>
    <div className='nav-logo'>
        <h1>BLOGG</h1>
        </div>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <p className='started'>
            <a className='clicker' href="">Get Started</a>
            <a className='signing' href="">Sign In</a>
        </p>
    </div>
  )
}

export default Navbar