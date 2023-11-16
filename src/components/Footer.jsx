import React from 'react'
import './Footer.css'
import img1 from '../assets/images/ph_copyright-light.png'

const Footer = () => { 
  return (
    <div className="Footer">
      <div className="nigga1">
        <div className="blogger">
        <h1>BLOGG</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ipsum ratione consequatur odit dolor nam, velit aspernatur inventore provident consectetur ab commodi</p>
        <div className="subscribe">
          <form action="">
            <input className='email' type="email" placeholder='Email' />
            <a className='succi' href="">Subscribe</a>
          </form>
        </div>
        </div>
        <div className="quicker">
          <ul>
            <li><a href="">Quick Links</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="quicker">
          <ul>
            <li><a href="">Quick Links</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul> 
        </div>
      </div>
      <div className="copyright">
        <div className="copy">
          <div className="pillar">
        <img src={img1} alt="" />
        </div>
        <p className='year'>2023</p>
        <h6 className='logo'>BLOGG</h6>
        </div>
        <p className='all-rights'>All Rights Reserved</p>
        <a className='privacy' href="">Privacy Policy</a>
        <a className='terms' href="">Terms of Service</a>
      </div>
    </div>
  )
}

export default Footer