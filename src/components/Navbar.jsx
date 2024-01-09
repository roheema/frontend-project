import React from 'react'
import './Navbar.css'
import { useAuth } from "../AuthContext";
import img1 from '../assets/images/Ellipse 2.png'
import img2 from '../assets/images/Vector.png'
import img3 from '../assets/images/mdi_delete.png'

const Navbar = () => {


  const { user } = useAuth();
  

  return (
    <>
   <div>
 
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <b className="modal-title fs-5" id="staticBackdropLabel">Are you sure you want to log out?</b>
        </div>
        <div className="modal-footer">
        <a href="/logout"><button type="button" className="btn btn-primary" data-bs-dismiss="modal">Yes</button></a>
          <button type="button" data-bs-dismiss="modal" className="btn btn-danger">No</button>
        </div>
      </div>
    </div>
  </div>
</div>


    <div className='nav-container'>
    <div className='nav-logo'>
        <h1>BLOGG</h1>
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <p className='started'>
            {user ? (
          <>
          <div className="dropdown">
  <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img src={img1} alt="Dropdown Image" style={{width: 50, height: 50, marginRight: 5}} />
  </a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/profile"><img src={img2} alt="" /> Edit Profile Picture</a></li>
    <li><a data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="dropdown-item" href="#"><img src={img3} alt="" /> Logout</a></li>
    
  </ul>
</div>


          </>
           
        ) : (
          <>
            <li>
            <a className='clicker' href="/signup">Get Started</a>

            </li>
            <li>
            <a className='signing' href="/signin">Sign In</a>
            </li>
          </>
        )}
        </p>
    </div>
    </>
  )
}

export default Navbar